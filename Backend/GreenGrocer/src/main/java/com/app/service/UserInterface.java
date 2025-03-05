package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.UserDto;
import com.app.entities.JwtRequest;
import com.app.entities.User;
import com.app.entities.ValidateUserDto;

public interface UserInterface {
	User addUser(User user);

	User getUserInfo(Long id);

	ApiResponse findUserByEmail(User user);

	User updateUser(Long uid,UserDto user);

	void delUser(Long userId);

	List<User> getAllUsers();

	String addNewUser(UserDto userDto);

	String forgotPassword(String email);

	User getByMail(String email);

	String validateUser(ValidateUserDto userInfo);

}
