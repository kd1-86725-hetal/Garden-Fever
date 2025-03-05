package com.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name="deliveryboy")
public class DeliveryBoy {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="d_id")
	private Long delId;
	
	@Column(name="email",length=50,nullable = false, unique = true)
	private String email;
	
	@Column(name="password",length=8,nullable = false)
	private String password;
	
	@Column(name="full_name",length=50,nullable = false)
	private String fullName;
	
	@Column(name="mobile",length=10,nullable = false, unique = true)
	private String mobile;
	
	@Column(name="address",length=50,nullable = false)
	private String address;
	
	@Column(name="city",length=30,nullable = false)
	private String city;
	
	@Column(name="state",length=30,nullable = false)
	private String state;
	
	@Column(name="pincode",length=6,nullable = false)
	private String pincode;
	
	@Column(name="aadhar",length=12,nullable = false, unique = true)
	private String aadhar;
	
	@Column(name="salary")
	private double salary;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="s_id")
	private Seller seller;
	
	public DeliveryBoy(String email,String password)
	{
		this.email=email;
		this.password=password;
	}
	
	public DeliveryBoy(String email,String password,String fullName,String mobile,String address,String city,String state,String pincode,String aadhar,double salary)
	{
		this.email=email;
		this.password=password;
		this.fullName=fullName;
		this.mobile=mobile;
		this.address=address;
		this.city=city;
		this.state=state;
		this.pincode=pincode;
		this.aadhar=aadhar;
		this.salary=salary;
	}
}
