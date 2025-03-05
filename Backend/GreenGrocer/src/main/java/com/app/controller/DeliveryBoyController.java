package com.app.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.AssignedOrderDao;
import com.app.dto.ApiResponse;
import com.app.dto.DeliveryBoyDTO;
import com.app.entities.AssigndOrders;
import com.app.entities.AssignedOrderDto;
import com.app.entities.DeliveryBoy;
import com.app.entities.JwtRequest;
import com.app.service.DeliveryBoyInterface;

@RestController
@RequestMapping("/deliveryboy")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DeliveryBoyController {
	
	@Autowired
	private DeliveryBoyInterface deliveryBoyService;
	
	@Autowired
	private AssignedOrderDao assignDao;
	
	@GetMapping("/{id}")
	public ResponseEntity<DeliveryBoy> findById(@PathVariable Long id)
	{
		return ResponseEntity.ok(deliveryBoyService.findById(id));
	}
	
	@PostMapping("/login")
	public DeliveryBoy findDeliveryBoyByEmail(@RequestBody JwtRequest request)
	{
		return deliveryBoyService.login(request);
	}
	
	@PostMapping("/addDeliveryboy/{sellerId}")
	public ResponseEntity<DeliveryBoy> addDeliveryBoy(@RequestBody DeliveryBoy deliveryBoy,@PathVariable Long sellerId)
	{
		DeliveryBoy del = deliveryBoyService.addDeliveryBoy(deliveryBoy,sellerId);
		return new ResponseEntity<>(del,HttpStatus.CREATED);
	}
	
	@PutMapping("/update/{id}")
	public ApiResponse updateDeliveryBoy(@RequestBody DeliveryBoyDTO deliveryBoyDto,@PathVariable Long id)
	{
		DeliveryBoy del = deliveryBoyService.updateDeliveryBoy(deliveryBoyDto,id);
		if(del != null) {
			return new ApiResponse("Delivery Boy details updated succesfully",true);
		}else {
			return new ApiResponse("Delivery Boy details are not updated succesfully",false);
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<ApiResponse> deleteDeliveryBoy(@PathVariable Long id)
	{
		deliveryBoyService.deleteDeliveryBoy(id);
		return new ResponseEntity(new ApiResponse("Delivery Boy account deleted succesfully",true),HttpStatus.OK);
	}
	
	@GetMapping("/getOrders/{did}")
	public List<AssigndOrders> getAssignedOrders(@PathVariable Long did){
		return deliveryBoyService.getAllPending(did);
	}
	
	@DeleteMapping("/deleteAssigned/{oid}")
	public void delComplOrder(@PathVariable Long oid) {
		deliveryBoyService.delAssin(oid);
	}
	
}
