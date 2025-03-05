package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custome_exception.ResourceNotFoundException;
import com.app.dao.BidDao;
import com.app.dao.BucketDao;
import com.app.dao.ProductDao;
import com.app.dao.SellerDao;
import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.dto.BucketDTO;
import com.app.dto.SellerDTO;
import com.app.entities.Bid;
import com.app.entities.Bucket;
import com.app.entities.Orders;
import com.app.entities.Product;
import com.app.entities.Seller;
import com.app.entities.User;

@Service
@Transactional
public class BucketImpl implements BucketInterface{
	
	@Autowired
	private ProductDao prodDao;
	
	@Autowired
	private BidDao bdao;
	
	@Autowired
	private BucketDao bucketDao;
	
	@Autowired
	private SellerDao sellerDao;
	
	@Autowired
	private UserDao ud;

	@Override
	public ApiResponse addToBucket(List<BucketDTO> bucket) {
		// TODO Auto-generated method stub
		Bid bid = new Bid();
		for (BucketDTO bucketDTO : bucket) {
			Long uid = bucketDTO.getUid();
			bid.setUid(uid);
		}
		bdao.save(bid);
		
		Long bid1 = bid.getBid();
		for (BucketDTO bucketsDTO : bucket) {
			Product product = prodDao.findById(bucketsDTO.getPid()).orElseThrow(()->new ResourceNotFoundException("product","id",bucketsDTO.getPid() ));
			Seller  seller = sellerDao.findById(bucketsDTO.getSid()).orElseThrow(()-> new ResourceNotFoundException("Seller","id",bucketsDTO.getSid()));
			User user = ud.findById(bucketsDTO.getUid()).orElseThrow(()->new ResourceNotFoundException("User", "id", bucketsDTO.getUid()));
	        
			Bucket b =new Bucket();
			b.setBid(bid1);
			b.setPname(product.getPname());
			b.setPrice(product.getPrice());
			b.setProduct(product);
			b.setQuantity(bucketsDTO.getQuantity());
			b.setSeller(seller);
			b.setUser(user);
			double bill = product.getPrice()*bucketsDTO.getQuantity();
			b.setBill(bill);
			
			bucketDao.save(b);
			
		}
		return new ApiResponse("Added to cart",true);
	}

	@Override
	public List<Bucket> getBucket(Long uid) {
		// TODO Auto-generated method stub
		List<Bucket> bList = bucketDao.findBucketByUserUid(uid);
		return bList;
	}
	
	@Override
	public void deleteMyBucket(Long uid) {
		
		List<Bucket> bkt = bucketDao.findByUserUid(uid);
		for (Bucket bucket : bkt) {
			bucketDao.delete(bucket);
		}
		
	}
	
	@Override
	public Bucket getBucketById(Long bucketId) {
		Bucket bucket = bucketDao.findById(bucketId).orElseThrow(()->new ResourceNotFoundException("Bucket", "bucketId", bucketId));
		if(bucket!=null)
		{
			return bucket;
		}
		return bucket;
	}
	

}
