package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entities.User;

public interface UserDao extends JpaRepository<User, Long> {
	
	User findUserByEmail(String email);
	User findByEmail(String email);
	
	@Query("select count(*) from User u")
	public Long getUCount();
}
