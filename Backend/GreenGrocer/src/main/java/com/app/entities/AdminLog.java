package com.app.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="adminlog")
public class AdminLog {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="a_id")
	int id;
	
	@Column(name="admin_id")
	int adminId;
	
	@Column(name="operation")
	String operation;
	
	@Column(name="date_time")
	LocalDate date;
	
	@Column(name="uid",nullable = true)
	int userId;
	
	@Column(name="s_id",nullable = true)
	int sellerId;
}
