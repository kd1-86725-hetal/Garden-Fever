package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Oid;

public interface OidDao extends JpaRepository<Oid, Long>{

}
