package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custome_exception.ResourceNotFoundException;
import com.app.dao.AdminDao;
import com.app.dao.DeliveryBoyDao;
import com.app.dao.ProductDao;
import com.app.dao.SellerDao;
import com.app.dao.UserDao;
import com.app.dto.AllCountDataDTO;
import com.app.entities.Admin;
import com.app.entities.DeliveryBoy;
import com.app.entities.JwtRequest;
import com.app.entities.Product;
import com.app.entities.Seller;
import com.app.entities.User;

@Service
@Transactional
public class AdminImpl implements AdminInterface{
	@Autowired
	private AdminDao adminDao;
	
	@Autowired
	private SellerDao sellerDao;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private DeliveryBoyDao deliveryBoyDao;

	@Autowired
	private ProductDao productDao;
	
	@Override
	public Admin getAdminById(Long id) {
		Admin admin=adminDao.findById(id).orElseThrow(()->new ResourceNotFoundException("Admin", "Id", id));
		return admin;
	}

	@Override
	public List<Admin> getAllAdmin() {
		// TODO Auto-generated method stub
		List<Admin> admin = adminDao.findAll();
		return admin;
	}

	
	@Override
	public String addNewAdmin(Admin admin) {
		if(admin!=null)
		{
			adminDao.save(admin);
			return "Admin added successfully!!!";
		}
		
		return "FAILED!!!";
	}

	@Override
	public List<Seller> findAllSeller() {
		List <Seller> list=sellerDao.findAll();
		return list;
	}

	@Override
	public List<User> findAllUser() {
		List<User> list=userDao.findAll();
		return list;
	}

	@Override
	public List<DeliveryBoy> findAllDeliveryBoy() {
		List<DeliveryBoy> list=deliveryBoyDao.findAll();
		return list;
	}

	@Override
	public List<Product> findAllProducts() {
		List<Product> list=productDao.findAll();
		return list;
	}

	@Override
	public Long getProuctCount() {
		// TODO Auto-generated method stub
		return productDao.getCount();
	}

	@Override
	public Long getSellerCount() {
		// TODO Auto-generated method stub
		return sellerDao.getSCount();
	}

	@Override
	public Long getUsersCount() {
		// TODO Auto-generated method stub
		return userDao.getUCount();
	}

	@Override
	public Long getDeliveryCount() {
		// TODO Auto-generated method stub
		return deliveryBoyDao.getDCount();
	}

	@Override
	public AllCountDataDTO getAllData() {
		AllCountDataDTO result=new AllCountDataDTO();
		result.setDeliveryboyCount(deliveryBoyDao.getDCount());
		result.setProductCount(productDao.getCount());
		result.setSellerCount(sellerDao.getSCount());
		result.setUserCount(userDao.getUCount());
		return result;
	}
	
	@Override
	public Admin getAdminByEmail(JwtRequest request) {
		Admin admin = adminDao.findAdminByEmail(request.getEmail());
		if(admin.getPassword().equals(request.getPassword()))
		{
			return admin;
		}
		return null;
	}
	
}
