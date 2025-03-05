package com.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "products")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long pid;
	@Column(name = "p_name", nullable = false, length = 30)
	private String pname;
	@Column(name = "p_price", nullable = false)
	private int price;
	@Column(name = "availableQuantity", nullable = false)
	private int availableQuantity;
	@Column(name = "url")
	private String imageUrl;
	@Lob
	private byte[] image;
	@ManyToOne
	@JoinColumn(name = "s_id")
	private Seller seller;
	
	public Product(Long pid)
	{
	
		this.pid = pid;
	
	}
	
}
