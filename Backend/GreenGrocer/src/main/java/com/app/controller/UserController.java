
package com.app.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.UserDto;
import com.app.entities.JwtRequest;
import com.app.entities.JwtResponse;
import com.app.entities.User;
import com.app.entities.UserEntity;
import com.app.entities.ValidateUserDto;
import com.app.security.JwtHelper;
import com.app.service.UserInterface;
import com.app.service.UserService;

@RestController
@RequestMapping
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private AuthenticationManager authManager;
	
	@Autowired
	private JwtHelper helper;
	
	@Autowired
	private UserInterface register;
	
	@GetMapping("/greengrocer/user/getUser")
	public ResponseEntity<List<User>> getAllUsers(){
		return ResponseEntity.ok(register.getAllUsers());
	}
	
	@GetMapping("/greengrocer/user/getUser/{id}")
	public ResponseEntity<User> getUserInfo(@PathVariable Long id)
	{
		return ResponseEntity.ok(register.getUserInfo(id));
	}
	
//	@PostMapping("/login")
//	public ApiResponse getUserByEmail(@RequestBody User user)
//	{
//		ApiResponse api = register.findUserByEmail(user);
//		if(api.getSuccess()) {
//			return new ApiResponse("Login Succesfull",true);
//		}else {
//			return new ApiResponse("Login failed",false);
//		}
//	}
	
	@PostMapping("/user/login")
	public ResponseEntity<JwtResponse> login(@RequestBody JwtRequest request){
//		this.doAuthenticate(request.getEmail(), request.getPassword());
		
		UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
		String token = this.helper.generateToken(userDetails);
		
		JwtResponse response = JwtResponse.builder()
				.jwtToken(token)
				.status("success")
				.username(userDetails.getUsername()).build();
		return new ResponseEntity<>(response,HttpStatus.OK);
	}
	
	private void doAuthenticate(String email, String password) {
		UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(email, password);
		try {
			authManager.authenticate(authentication);
		} catch (BadCredentialsException e) {
			// TODO: handle exception
			throw new RuntimeException("Invalid Username or password");
		}
	}
	
//	@PostMapping("/newUser")
//	public ResponseEntity<User> addUser(@RequestBody User user) {
//		User createdUser = register.addUser(user);
//		return new ResponseEntity<>(createdUser,HttpStatus.CREATED);
//	}
	
//	@PostMapping("/user/createUser")
//	public User createUser(@RequestBody User user) {
//		return register.addUser(user);
//	}
	
	@PutMapping("/greengrocer/user/updateUser/{uid}")
	public ResponseEntity<User> updateUser(@PathVariable Long uid, @RequestBody UserDto user) {
		User u = register.updateUser(uid,user);
		return ResponseEntity.ok(u);
	}
	
	@DeleteMapping("/greengrocer/user/{userId}")
	public ResponseEntity<ApiResponse> deleteUser(@PathVariable Long userId) {
		register.delUser(userId);
		return new ResponseEntity(new ApiResponse("User Deleted Succesfully",true),HttpStatus.OK);
	}
	
	@PostMapping("/user/createUser")
	public String addNewUser(@RequestBody UserDto  userDto) {
		return register.addNewUser(userDto);
		
	}
	
	@PutMapping("/forgot-password")
	public ResponseEntity<?> forgotPassword(@RequestBody String email)
	{
		return new ResponseEntity<>(register.forgotPassword(email),HttpStatus.OK);
	}
	
	@GetMapping("/greengrocer/user/getUserByEmail/{email}")
	public User getByEmail(@PathVariable String email){
		User u = register.getByMail(email);
		return u;
	}
	
//	@PostMapping("/greengrocer/user/{email}")
//	public String validateUser(@RequestBody ValidateUserDto userInfo)
//	{
//		return register.validateUser(userInfo);
//	}

}
