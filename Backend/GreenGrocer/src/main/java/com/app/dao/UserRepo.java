package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.UserEntity;

public interface UserRepo extends JpaRepository<UserEntity, Long> {
	public Optional<UserEntity> findByEmail(String email);
}
