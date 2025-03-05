 package com.app.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "orders")
public class Orders {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long none;
	@Column(name = "oid")
	private Long oid;
	@Column(name = "quantity", nullable = false)
	private int quantity;
	@Column(name = "bill", nullable = false)
	private double bill;
	@Column(name = "status", nullable = false,length=13)
	private String status;
	@Column(name = "order_date")
	private LocalDate odate;
	@OneToOne
	@JoinColumn(name="uid",nullable = false)
	private User user;
	@OneToOne
	@JoinColumn(name="pid",nullable = false)
	private Product product;
	@OneToOne
	@JoinColumn(name="s_id",nullable = false)
	private Seller seller;
	
}
