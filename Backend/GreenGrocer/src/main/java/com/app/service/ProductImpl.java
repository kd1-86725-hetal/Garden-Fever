package com.app.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.app.dao.ProductDao;
import com.app.dto.ApiResponse;
import com.app.entities.Product;

@Service
@Transactional
public class ProductImpl implements ProductInterface{
	
	@Autowired
	private ProductDao prod;

	@Override
	public List<Product> getAllProducts() {
		// TODO Auto-generated method stub
		List<Product> prodList = prod.findAll();
		return prodList;
	}

	@Override
	public List<Product> getProdByName(String name) {
		// TODO Auto-generated method stub
		List<Product> prodList = prod.findByPname(name);
		return prodList;
	}
	
	@Override
	public String deleteProductById(Long pid) {
		Product prod1 = prod.findById(pid).orElseThrow();
		prod.delete(prod1);
		return "Product Deleted!!!";
	}

	@Override
	public ApiResponse uplodImage(Long productId, MultipartFile imageFile) {
		Product product = prod.findById(productId).orElseThrow();
		try {
			product.setImage(imageFile.getBytes());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return new ApiResponse("Image Uploaded Succesfully",true);
	}

	@Override
	public byte[] downloadImage(Long productId) throws IOException {
		Product product = prod.findById(productId).orElseThrow();
		return product.getImage();
	}

	@Override
	public List<Product> searchByName(String pname) {
		// TODO Auto-generated method stub
		
		return prod.findByPnameContaining(pname);
	}

}
