package com.app.service;

import com.app.entities.AssignedOrderDto;
import com.app.entities.DeliveryBoy;
import com.app.entities.Orders;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.dto.ApiResponse;
import com.app.dto.ProductDto;
import com.app.dto.SellerDTO;
import com.app.entities.Product;
import com.app.entities.Seller;

public interface SellerInterface {

	Seller addNewSeller(Seller seller);
	Seller findSellerById(Long id);
	Seller findSellerByEmail(Seller findSeller);
	String addNewProduct(Long sid,Product product);
	String updateSeller(Long sid, SellerDTO seller);
	List<Orders> findSellerOrders(Long sid);
	String assignDeliveryBoy(Long did, AssignedOrderDto assignedOrderDto);
	List<Product> getProdBySeller(Long sid);
	List<DeliveryBoy> getAllDeliveryBoys(Long sid);
	String addProductByDto(Long sid, ProductDto product);
	Seller getSellerByEmail(String email);
	String addDeliveryBoy(DeliveryBoy deliveryBoy, Long sid);
	String deleteDeliveryBoy(Long did);
}
