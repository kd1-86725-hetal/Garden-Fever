package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Bucket;

public interface BucketDao extends JpaRepository<Bucket, Long> {

	List<Bucket>findBucketByUserUid(Long uid);
	List<Bucket> findByUserUid(Long uid);
}
