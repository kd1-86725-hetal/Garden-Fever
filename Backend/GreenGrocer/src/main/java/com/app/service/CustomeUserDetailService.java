package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.app.dao.UserDao;
import com.app.dao.UserRepo;
import com.app.entities.User;
import com.app.entities.UserEntity;

@Service
public class CustomeUserDetailService implements UserDetailsService{

	@Autowired
	private UserDao ud;
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		User user = ud.findByEmail(email);
		return user;
	}

}
