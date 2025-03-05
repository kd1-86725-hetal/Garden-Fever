package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custome_exception.ResourceNotFoundException;
import com.app.dao.AssignedOrderDao;
import com.app.dao.OrderDao;
import com.app.dao.ProductDao;
import com.app.dao.SellerDao;
import com.app.dao.UserDao;
import com.app.entities.AssigndOrders;
import com.app.entities.AssignedOrderDto;
import com.app.entities.Orders;
import com.app.dao.DeliveryBoyDao;
import com.app.dao.ProductDao;
import com.app.dao.SellerDao;
import com.app.dto.ApiResponse;
import com.app.dto.ProductDto;
import com.app.dto.SellerDTO;
import com.app.entities.DeliveryBoy;
import com.app.entities.Product;
import com.app.entities.Seller;
import com.app.entities.User;

@Service
@Transactional
public class SellerImpl implements SellerInterface{

	@Autowired
	private SellerDao sellerDao;
	
	@Autowired
	private ProductDao productDao;
	@Autowired
	private AssignedOrderDao assignedOrderDao;
	@Autowired
	private UserDao userDao;
	@Autowired
	private OrderDao orderDao;
	@Autowired
	private DeliveryBoyDao dbDao;
	
	@Override
	public Seller addNewSeller(Seller seller) {
		Seller s = sellerDao.save(seller);
		return s;
	}
	
	@Override
	public Seller findSellerById(Long id) {
		Seller tempSeller = sellerDao.findById(id).orElseThrow(()->new ResourceNotFoundException("Seller", "Id", id));
		return tempSeller;
	}
	
	@Override
	public Seller findSellerByEmail(Seller findSeller) {
		String email = findSeller.getEmail();
		String password =  findSeller.getPassword();
		
		Seller seller = sellerDao.findSellerByEmail(email);
		
		return seller;
	}
	
	@Override
	public String addNewProduct(Long sid,Product product) {
		Seller seller = sellerDao.findById(sid).orElseThrow();
		
		product.setSeller(seller);
		productDao.save(product);
		String msg = "Product Added Successfully!!!!!";
		return msg;
	}

	@Override
	public String assignDeliveryBoy(Long did, AssignedOrderDto assignedOrderDto) {
		Long uid=assignedOrderDto.getUid();
		User user=userDao.findById(uid).orElseThrow();
		AssigndOrders assignedOrder=new AssigndOrders();
		assignedOrder.setFullName(user.getFullName());
		assignedOrder.setCity(user.getCity());
		assignedOrder.setMobile(user.getMobileNo());
		assignedOrder.setAddress(user.getAddress());
		assignedOrder.setOid(assignedOrderDto.getOid());
		assignedOrder.setDelId(did);
		Long oid = assignedOrderDto.getOid();
		assignedOrderDao.save(assignedOrder);
		List<Orders> orders = orderDao.findByOid(oid);
		for (Orders orders2 : orders) {
			orders2.setStatus("Shipped");
			orderDao.save(orders2);
		}
		return "Delivery Assigned Successfully";
	}
	
	@Override
	public String updateSeller( Long sid,SellerDTO seller) {
		
		Seller s =sellerDao.findById(sid).orElseThrow();
		
		s.setAddress(seller.getAddress());
		s.setCity(seller.getCity());
		s.setEmail(seller.getEmail());
		s.setFullName(seller.getFullName());
		s.setMobileNo(seller.getMobileNo());
		s.setPassword(seller.getPassword());
		s.setPinCode(seller.getPinCode());
		s.setState(seller.getState());
		
		sellerDao.save(s);
		return "Seller Updated";
	}

	@Override
	public List<Orders> findSellerOrders(Long sid) {
		// TODO Auto-generated method stub
		List<Orders> orders = orderDao.findBySellerSid(sid);
		return orders;
	}

	@Override
	public List<Product> getProdBySeller(Long sid) {
		// TODO Auto-generated method stub
		return productDao.findBySellerSid(sid);
	}

	@Override
	public List<DeliveryBoy> getAllDeliveryBoys(Long sid) {
		Seller s=sellerDao.findById(sid).orElseThrow();
		List<DeliveryBoy> list=dbDao.findDeliveryBoysBySeller(s);
		return list;
	}

	@Override
	public String addProductByDto(Long sid, ProductDto product) {
		String msg="Product not added";
		Product p=new Product();
		p.setAvailableQuantity(product.getAvailableQuantity());
		p.setImageUrl(product.getImageUrl());
		p.setPname(product.getPname());
		p.setPrice(product.getPrice());
		Seller seller = sellerDao.findById(sid).orElseThrow();
		p.setSeller(seller);
		Product test= productDao.save(p);
		if(test!=null)
			msg="Product added";
		return msg;
	}
	
	
	@Override
	public Seller getSellerByEmail(String email) {

		Seller seller = sellerDao.findByEmail(email);
		return seller;
	}

	@Override
	public String addDeliveryBoy(DeliveryBoy deliveryBoy, Long sid) {
		String msg="Delivery boy not added..";
		Seller seller=sellerDao.findById(sid).orElseThrow();
		deliveryBoy.setSeller(seller);
		DeliveryBoy d= dbDao.save(deliveryBoy);
		if(d!=null)
			msg="Delivery boy added..";
		return msg;
	}

	@Override
	public String deleteDeliveryBoy(Long did) {
		DeliveryBoy deliBoy=dbDao.findById(did).orElseThrow();
		dbDao.delete(deliBoy);
		return "Delivery boy deleted";
	}

	
}
