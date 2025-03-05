package com.app.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
	private String fullName;
	private String email;
	private String mobileNo;
	private String password;
	private String address;
	private String pinCode;
	private String city;
	private String state;
}
