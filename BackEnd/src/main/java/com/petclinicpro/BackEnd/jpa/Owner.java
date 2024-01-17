package com.petclinicpro.BackEnd.jpa;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Owners")
public class Owner {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "ownerID")
	private Integer id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "phone")
	private String phone;
	
	public Owner() {
	}
	
	public Owner(Integer id, String name, String email, String phone) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	@Override
	public String toString() {
		return "Owner [id=" + id + ", name=" + name + ", email=" + email + ", phone=" + phone + "]";
	}
	
}

/*

CREATE TABLE Owners (
    ownerID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(20)
);

*/