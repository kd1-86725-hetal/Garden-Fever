package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AllCountDataDTO;
import com.app.entities.Admin;
import com.app.entities.DeliveryBoy;
import com.app.entities.JwtRequest;
import com.app.entities.Product;
import com.app.entities.Seller;
import com.app.entities.User;
import com.app.service.AdminInterface;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class AdminController {
	
	@Autowired
	private AdminInterface adminInterfaceService;
	
	@GetMapping("/{id}")
	public ResponseEntity<Admin> findAdmin(@PathVariable Long id)
	{
		return ResponseEntity.ok(adminInterfaceService.getAdminById(id));
	}
	
	@PostMapping
	public String addAdmin(@RequestBody Admin admin)
	{
		return adminInterfaceService.addNewAdmin(admin);
	}
	@GetMapping
	public ResponseEntity<List<Admin>> getAll(){
		return ResponseEntity.ok(adminInterfaceService.getAllAdmin());
	}
	
	@GetMapping("/getAllSeller")

	public List<Seller> findAllSeller()
	{
		return adminInterfaceService.findAllSeller();
	}
	
	@GetMapping("/getAllUser")
	public List<User> findAllUser()
	{
		return adminInterfaceService.findAllUser();
	}
	
	@GetMapping("/getAllProduct")
	public List<Product> findAllProducts()
	{
		return adminInterfaceService.findAllProducts();
	}

	@GetMapping("/getAllDeliveryBoy")

	public List<DeliveryBoy> findAllDeliveryBoy()
	{
		return adminInterfaceService.findAllDeliveryBoy();
	}
	
	@GetMapping("/getProductCount")
	public Long getProdCount() {
		return adminInterfaceService.getProuctCount();
	}
	
	@GetMapping("/getSellerCount")
	public Long getSellCount() {
		return adminInterfaceService.getSellerCount();
	}
	
	@GetMapping("/getUserCount")
	public Long getUserCount() {
		return adminInterfaceService.getUsersCount();
	}
	
	@GetMapping("/getDelCount")
	public Long getDelivCount() {
		return adminInterfaceService.getDeliveryCount();
	}
	
	@GetMapping("/allData")
	public AllCountDataDTO getAllData()
	{
		return adminInterfaceService.getAllData();
	}
	
	@PostMapping("/login")
	public  Admin getAdmin(@RequestBody JwtRequest request)
	{
		return adminInterfaceService.getAdminByEmail(request);
	}

	
	
}
