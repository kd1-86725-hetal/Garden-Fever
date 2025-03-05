package com.app.service;

import java.util.List;

import com.app.dto.AllCountDataDTO;
import com.app.entities.Admin;
import com.app.entities.DeliveryBoy;
import com.app.entities.JwtRequest;
import com.app.entities.Product;
import com.app.entities.Seller;
import com.app.entities.User;

public interface AdminInterface {

	Admin getAdminById(Long id);

	List<Admin> getAllAdmin();

	String addNewAdmin(Admin admin);

	List<Seller> findAllSeller();

	List<User> findAllUser();

	List<DeliveryBoy> findAllDeliveryBoy();

	List<Product> findAllProducts();

	Long getProuctCount();

	Long getSellerCount();

	Long getUsersCount();

	Long getDeliveryCount();

	AllCountDataDTO getAllData();

	Admin getAdminByEmail(JwtRequest request);

}
