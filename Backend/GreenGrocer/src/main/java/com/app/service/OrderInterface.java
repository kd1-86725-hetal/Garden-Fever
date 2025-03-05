package com.app.service;

import java.util.List;

import com.app.dto.OrdersDTO;
import com.app.entities.Bucket;
import com.app.entities.Orders;
import com.app.entities.Product;

public interface OrderInterface {

	Orders getOrderById(Long id);

	String addNewOrder(Long userId,Orders order);


	String addOrderList(List<OrdersDTO> orders);

	String deleteOrderById(Long oid);

	String confirmOrder(List<Bucket> bucket);

	void statusCompleted(Long oid);
	List<Orders> userAllOrders(Long uid);

	List<Orders> sellerPending(Long sid);

	List<Orders> sellerCompleted(Long sid);


}
