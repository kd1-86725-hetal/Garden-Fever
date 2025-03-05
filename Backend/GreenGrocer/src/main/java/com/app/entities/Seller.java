package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Generated;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name="seller")
public class Seller {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="s_id")
	private Long sid;
	@Column(name="s_fullname",length = 50, nullable = false)
	private String fullName;
	@Column(name="s_email",length = 50, unique = true, nullable = false)
	private String email;
	@Column(name="s_mobileNo",length = 10, unique = true, nullable = false)
	private String mobileNo;
	@Column(name="s_password",length = 8, nullable = false)
	private String password;
	@Column(name="s_address",length = 100,nullable = false)
	private String address;
	@Column(name="s_pincode",length = 6, nullable = false)
	private String pinCode;
	@Column(name="s_city",length = 20, nullable = false)
	private String city;
	@Column(name="s_state",length = 20, nullable = false)
	private String state;
	
	@JsonIgnore
	@OneToMany(mappedBy = "seller",fetch=FetchType.LAZY,cascade = CascadeType.ALL,orphanRemoval = true)
	private List<DeliveryBoy> deliveryBoyList = new ArrayList<DeliveryBoy>();
	
	
	public void addDeliveryBoy(List<DeliveryBoy> deliveryBoyList)
	{
		this.deliveryBoyList = deliveryBoyList;
	}
	
	public void removeDeliveryBoy(DeliveryBoy dboy)
	{
		this.deliveryBoyList.remove(dboy);
		dboy.setSeller(null);
	}
	
	public Seller(String email,String password)
	{
		this.email = email;
		this.password = password;
	}

	public Seller(Long id)
	{
		this.sid = id;
	}
	
}
