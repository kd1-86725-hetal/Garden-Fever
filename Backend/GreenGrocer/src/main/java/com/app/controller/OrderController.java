package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.OrdersDTO;
import com.app.entities.AssignedOrderDto;
import com.app.entities.Bucket;
import com.app.entities.Orders;
import com.app.entities.Product;
import com.app.service.OrderInterface;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class OrderController {

	@Autowired
	private OrderInterface orderService;
	
	@GetMapping("/{id}")
	public Orders getOrder(@PathVariable Long id)
	{
		return orderService.getOrderById(id);
	}
	
	@PostMapping("/addOrder/{userId}")
	public String addOrder(@PathVariable Long userId,@RequestBody Orders order)
	{
		System.out.println(userId);
		System.out.println(order.getQuantity());
		return orderService.addNewOrder(userId,order);
	}
	
	@PostMapping("/listOrder")
	public String addOrderList(@RequestBody List<OrdersDTO> orders) {
		return orderService.addOrderList(orders);
	}
	
	@PostMapping("/confirmOrder")
	public String confirm(@RequestBody List<Bucket> bucket )
	{
		return orderService.confirmOrder(bucket);
	}
	
	@DeleteMapping("/deleteOrder/{oid}")
	public String deleteOrder(@PathVariable Long oid)
	{
		return orderService.deleteOrderById(oid);
	}
	
	@PutMapping("/delBoyStatus/{oid}")
	public void updateStatus(@PathVariable Long oid) {
		orderService.statusCompleted(oid);
	}
	
	@GetMapping("/getUserOrders/{uid}")
	public List<Orders> getAllUserOrders(@PathVariable Long uid){
		return orderService.userAllOrders(uid);
	}
	
	@GetMapping("/getSellerPending/{sid}")
	public List<Orders> getSellerPending(@PathVariable Long sid){
		return orderService.sellerPending(sid);
	}
	@GetMapping("/getSellerCompleted/{sid}")
	public List<Orders> getSellerComplet(@PathVariable Long sid){
		return orderService.sellerCompleted(sid);
	}
}
