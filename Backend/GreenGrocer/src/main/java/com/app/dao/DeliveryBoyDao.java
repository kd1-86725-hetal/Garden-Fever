package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.dto.DeliveryBoyDTO;
import com.app.entities.DeliveryBoy;
import com.app.entities.Seller;
import com.app.entities.User;

public interface DeliveryBoyDao extends JpaRepository<DeliveryBoy, Long> {
	public DeliveryBoy findDeliveryBoyByEmail(String email);
	
	@Query("select count(*) from DeliveryBoy d")
	public Long getDCount();
	
	public List<DeliveryBoy> findDeliveryBoysBySeller(Seller s);
	
	public DeliveryBoy findDeliveryBoyByDelId(Long id);
}
