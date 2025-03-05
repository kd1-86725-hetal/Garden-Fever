package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Product;

public interface ProductDao extends JpaRepository<Product, Long>{
	public List<Product> findByPname(String name);
	
	@Query("select count(*) from Product p")
	public Long getCount();
	
	List<Product> findByPnameContaining(String pname);
	
	List<Product> findBySellerSid(Long sid);
}
