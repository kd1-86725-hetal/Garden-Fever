package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.BucketDTO;
import com.app.entities.Bucket;
import com.app.service.BucketInterface;

@RestController
@RequestMapping("/cart")
@CrossOrigin
public class BucketController {

	@Autowired
	private BucketInterface bucketService;
	
	@PostMapping("/addbucket")
	public ApiResponse addToCart(@RequestBody List<BucketDTO> bucket) {
		bucketService.addToBucket(bucket);
		return new ApiResponse("Products Added to cart Succesfully",true);
	}
	
	@GetMapping("/findBucket/{uid}")
	public List<Bucket> getAllBucket(@PathVariable Long uid){
		return bucketService.getBucket(uid);
	}
	
	@DeleteMapping("/deleteBucket/{uid}")
	public void deleteBucket(@PathVariable Long uid)
	{
		 bucketService.deleteMyBucket(uid);
	}
	
	@GetMapping("/{productId}")
	public Bucket getBucket(@PathVariable Long productId)
	{
		return bucketService.getBucketById(productId);
	}
}
