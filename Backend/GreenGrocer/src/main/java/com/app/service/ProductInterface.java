package com.app.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ApiResponse;
import com.app.entities.Product;

public interface ProductInterface {

	List<Product> getAllProducts();

	List<Product> getProdByName(String name);

	String deleteProductById(Long pid);

	ApiResponse uplodImage(Long productId, MultipartFile imageFile);

	byte[] downloadImage(Long productId) throws IOException;

	List<Product> searchByName(String pname);

}
