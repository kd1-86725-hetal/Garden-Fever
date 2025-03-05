package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.AssigndOrders;

public interface AssignedOrderDao extends JpaRepository<AssigndOrders, Long>{

	List<AssigndOrders> findByDelId(Long did);
	
	AssigndOrders findByOid(Long oid);
}
