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

import com.app.entities.AssignedOrderDto;
import com.app.entities.DeliveryBoy;
import com.app.entities.Orders;
import com.app.dto.ApiResponse;
import com.app.dto.ProductDto;
import com.app.dto.SellerDTO;
import com.app.entities.Product;
import com.app.entities.Seller;
import com.app.service.SellerInterface;

@RestController
@RequestMapping("/seller")
@CrossOrigin(origins="*",allowedHeaders = "*")
public class SellerController {

	@Autowired
	private SellerInterface sellerService;
	
	@PostMapping("/newSeller")
	public ResponseEntity<Seller> addSeller(@RequestBody Seller newSeller)
	{
		Seller sel = sellerService.addNewSeller(newSeller);
		return new ResponseEntity<>(sel,HttpStatus.CREATED);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Seller> getSellerById(@PathVariable Long id)
	{
		return ResponseEntity.ok(sellerService.findSellerById(id));
	}
	
	@PostMapping("/login")
	public Seller getSellerByEmail(@RequestBody Seller findSeller)
	{
		return sellerService.findSellerByEmail(findSeller);
	}
	
	@PostMapping("/addNewProduct/{sid}")
	public String addProductByDto(@PathVariable Long sid,@RequestBody ProductDto product)
	{
		return sellerService.addProductByDto(sid,product);
	}
	
	@PostMapping("/addProduct/{sid}")
	public String addProduct(@PathVariable Long sid,@RequestBody Product product)
	{
		return sellerService.addNewProduct(sid,product);
	}
	
	@GetMapping("/getSellerOrders/{sid}")
	public ResponseEntity<List<Orders>> getSellerOrders(@PathVariable Long sid){
		return ResponseEntity.ok(sellerService.findSellerOrders(sid));
	}
	
	@PostMapping("/assignDeliveryBoy/{did}")
	public String assignDelivery(@PathVariable Long did, @RequestBody AssignedOrderDto assignedOrderDto){
		return sellerService.assignDeliveryBoy(did,assignedOrderDto);
	}
	@PutMapping("/updateSeller/{sid}")
	public String updateSeller(@PathVariable Long sid,@RequestBody SellerDTO seller)
	{
		return sellerService.updateSeller(sid,seller);
	}
	@GetMapping("/sellerProducts/{sid}")
	public List<Product> getSellerProd(@PathVariable Long sid){
		return sellerService.getProdBySeller(sid);
	}
	
	@GetMapping("/getDeliveryboys/{sid}")
	public List<DeliveryBoy> getAllDeliveryBoys(@PathVariable Long sid)
	{
		return sellerService.getAllDeliveryBoys(sid);
	}
	
	@GetMapping("/getSellerByEmail/{email}")
	public Seller getSeller(@PathVariable String email)
	{
		return sellerService.getSellerByEmail(email);
	}
	
	@PostMapping("/addDeliveryBoy/{sid}")
	public String addDeliveryBoy(@RequestBody DeliveryBoy deliveryBoy,@PathVariable Long sid)
	{
		return sellerService.addDeliveryBoy(deliveryBoy,sid);
	}
	
	@DeleteMapping("/{did}")
	public String deleteDeliveryBoy(@PathVariable Long did)
	{
		return sellerService.deleteDeliveryBoy(did);
	}
	
}
