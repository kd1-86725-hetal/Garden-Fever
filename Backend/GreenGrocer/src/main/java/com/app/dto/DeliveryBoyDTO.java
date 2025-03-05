package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DeliveryBoyDTO {
	
	private Long delId;
	private String email;
	private String password;
	private String fullName;
	private String mobile;
	private String address;
	private String city;
	private String state;
	private String pincode;
	private String aadhar;
	private double salary;
	private Long sellerId;
	
	public DeliveryBoyDTO(String fullName, String address, String city, String state, String pincode) {
		super();
		this.fullName = fullName;
		this.address = address;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
	}
	
	
}
