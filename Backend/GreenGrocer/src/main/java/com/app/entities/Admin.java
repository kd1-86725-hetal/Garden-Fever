package com.app.entities;

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
@Table(name="admin")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Admin {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="admin_id")
	private Long adminId;
	
	@Column(name="email",length=50,nullable = false)
	private String email;
	
	@Column(name="full_name",length = 50,nullable = false)
	private String fullName;
	
	@Column(name="username",length = 50,nullable = false)
	private String userName;
	
	@Column(name="mobile",length=10,nullable = false)
	private String mobile;
	
	@Column(name="password")
	private String password;
}
