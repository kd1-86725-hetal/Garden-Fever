package com.app.controller;

import static org.springframework.http.MediaType.IMAGE_GIF_VALUE;
import static org.springframework.http.MediaType.IMAGE_JPEG_VALUE;
import static org.springframework.http.MediaType.IMAGE_PNG_VALUE;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.entities.Product;
import com.app.service.ImageHandlingServiceInterface;
import com.app.service.ProductInterface;

@RestController
@CrossOrigin
@RequestMapping("/products")
public class ProductController {
	@Autowired
	private ProductInterface prod;
	
	
	@GetMapping
	public List<Product> getAllProducts(){
		return prod.getAllProducts();
	}
	
	@GetMapping("/{name}")
	public List<Product> getProductByName(@PathVariable String name){
		return prod.getProdByName(name);
	}
	
	@DeleteMapping("/{pid}")
	public String deleteProduct(@PathVariable Long pid)
	{
		return prod.deleteProductById(pid);
	}
	
	@PostMapping(value = "/images/{productId}",consumes = "multipart/form-data")
	public ResponseEntity<?>uploadImage(@PathVariable Long productId,@RequestParam MultipartFile imageFile) throws IOException{
		System.out.println("in upload image"+productId);
		return ResponseEntity.status(HttpStatus.CREATED).body(prod.uplodImage(productId,imageFile));
	}
	
	@PostMapping(value = "/getImages/{productId}",produces = {IMAGE_GIF_VALUE,IMAGE_JPEG_VALUE,IMAGE_PNG_VALUE})
	public ResponseEntity<?>serveProductImage(@PathVariable Long productId) throws IOException{
		System.out.println("in download img "+productId);
		return ResponseEntity.ok(prod.downloadImage(productId));
	}
	
	@GetMapping("/searchProduct/{pname}")
	public List<Product> search(@PathVariable String pname) {
		return prod.searchByName(pname);
	}
}
