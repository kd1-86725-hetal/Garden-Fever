package com.app.entities;



import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="bucket")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Bucket {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long temp;
	
	@Column(name="bid")
	private Long bid;
	
	@Column(name = "quantity", nullable = false)
	private int quantity;
	
	@Column(name = "ProductName",nullable = false)
	private String pname;
	
	@Column(name = "PricePerProduct",nullable = false)
	private int price;
	
	@Column(name = "bill", nullable = false)
	private double bill;
	
	@OneToOne
	@JoinColumn (name="uid",nullable = false)
	private User user;
	
	@OneToOne
	@JoinColumn (name="pid",nullable = false)
	private Product product;
	
	@OneToOne
	@JoinColumn (name="s_id",nullable = false)
	private Seller seller;
	
}
