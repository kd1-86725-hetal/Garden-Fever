package com.app.service;

import java.util.List;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.config.EmailAppConfig;
import com.app.custome_exception.ResourceNotFoundException;
import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.dto.UserDto;
import com.app.entities.JwtRequest;
import com.app.entities.User;
import com.app.entities.ValidateUserDto;
import com.app.utils.OtpGenerator;

@Service
@Transactional
public class UserImpl implements UserInterface{
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private UserDao registerDao;
	
	@Autowired
	private JavaMailSender javaMailSender;

	@Autowired
	private EmailAppConfig emailConfig;
	
	@Override
	public User addUser(User user) {
		// TODO Auto-generated method stub
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		User u = registerDao.save(user);
		return u;
	}

	@Override
	public User getUserInfo(Long id) {
		// TODO Auto-generated method stub
		User user=registerDao.findById(id).orElseThrow(()-> new ResourceNotFoundException("User", "Id", id));
		return user;
	}

	@Override
	public ApiResponse findUserByEmail(User u) {
		String email = u.getEmail();
		User user=registerDao.findUserByEmail(email);
		if(user!=null)
		{
			if(user.getPassword().equals(u.getPassword()))
			{
				return new ApiResponse("User Login Succesfull",true);
			}
		}
		return new ApiResponse("User Login is unsuccesfull",false);
	}

	@Override
	public User updateUser(Long uid,UserDto user) {
		// TODO Auto-generated method stub
		User u = registerDao.findById(uid).orElseThrow(()-> new ResourceNotFoundException("User", "Id",uid));
		u.setFullName(user.getFullName());
		u.setAddress(user.getAddress());
		u.setCity(user.getCity());
		u.setEmail(user.getEmail());
		u.setMobileNo(user.getMobileNo());
		u.setPassword(passwordEncoder.encode(user.getPassword()));
		u.setPinCode(user.getPinCode());
		u.setState(user.getState());
		registerDao.save(u);
		return u;
	}

	@Override
	public void delUser(Long userId) {
		// TODO Auto-generated method stub
		User user = registerDao.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User", "Id", userId));
		registerDao.delete(user);
	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		List<User> user = registerDao.findAll();
		return user;
	}
	
	@Override
	public String forgotPassword(String email) {
		User user=registerDao.findUserByEmail(email);
		try
		{
			emailConfig.sendSetPasswordEmail(email);
		}
		catch(MessagingException e)
		{
			throw new RuntimeException("Unable to send set password please try again....");	
		}
		
		return "Please check your email to set new password to your account ";
	}

	@Override
	public String addNewUser(UserDto userDto) {
		User user=new User();
		OtpGenerator otp=new OtpGenerator();
		user.setAddress(userDto.getAddress());
		user.setCity(userDto.getCity());
		user.setEmail(userDto.getEmail());
		user.setFullName(userDto.getFullName());
		user.setMobileNo(userDto.getMobileNo());
		user.setPassword(passwordEncoder.encode(userDto.getPassword()));
		String otpvalue=otp.GenerateOtp();
		user.setOtp(otpvalue);
		user.setStatus(false);
		user.setPinCode(userDto.getPinCode());
		user.setState(userDto.getState());
		registerDao.save(user);
		
//		SimpleMailMessage simpleMsg=new SimpleMailMessage();
//		simpleMsg.setTo(user.getEmail());
//		simpleMsg.setSubject("Otp verify");
//		simpleMsg.setText(user.getOtp());
//		
//		javaMailSender.send(simpleMsg);
			
		
		return "Saved";
	}

	@Override
	public User getByMail(String email) {
		// TODO Auto-generated method stub
		User u = registerDao.findByEmail(email);
		return u;
	}

	@Override
	public String validateUser(ValidateUserDto userInfo) {
		String msg="unsuccess";
		User u=registerDao.findByEmail(userInfo.getEmail());
		if(u.getOtp().equals(userInfo.getOtp()))
		{
			msg="success";
			u.setStatus(true);
			registerDao.save(u);
		}
		return msg;
	}

}
