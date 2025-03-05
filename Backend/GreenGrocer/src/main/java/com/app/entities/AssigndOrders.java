package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="assigned_orders")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AssigndOrders {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long aoid;
	
	@Column(name="oid")
	private Long oid;
	
	@Column(name="d_id")
	private Long delId;
	
	@Column(name="full_name")
	private String fullName;
	
	@Column(name="mobile")
	private String mobile;
	
	@Column(name="address")
	private String address;
	
	@Column(name="city")
	private String city;
}
