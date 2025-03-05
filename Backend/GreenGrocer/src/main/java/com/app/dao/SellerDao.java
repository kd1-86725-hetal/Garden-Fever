package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Seller;




public interface SellerDao extends JpaRepository<Seller, Long> {
		
	public Seller findSellerByEmail(String email);
	
	Seller findByEmail(String email);
	@Query("select count(*) from Seller s")
	public Long getSCount();
}
