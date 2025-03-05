package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.BucketDTO;
import com.app.entities.Bucket;

public interface BucketInterface {
	ApiResponse addToBucket(List<BucketDTO> bucket);

	List<Bucket> getBucket(Long uid);

	void deleteMyBucket(Long uid);

	Bucket getBucketById(Long bucketId);	
}
