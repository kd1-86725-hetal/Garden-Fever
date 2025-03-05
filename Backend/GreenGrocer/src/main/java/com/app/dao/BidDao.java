package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Bid;

public interface BidDao extends JpaRepository<Bid, Long> {
	

}
