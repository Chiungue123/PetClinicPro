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
	private Integer ownerID;
	
	@Column(name = "firstName")
	private String firstName;
	
	@Column(name = "lastName")
	private String lastName;

	@Column(name = "email")
	private String email;
	
	@Column(name = "phone")
	private String phone;
	
	//@OneToMany(mappedBy = "owner")
    //private Set<Pet> pets = new HashSet<>();
	
	public Owner() {
	}
	
	public Owner(Integer ownerID, String firstName, String lastName, String email, String phone) {
		super();
		this.ownerID = ownerID;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
	}

	public Integer getOwnerID() {
		return ownerID;
	}

	public void setOwnerID(Integer id) {
		this.ownerID = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
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
		return "Owner [id=" + ownerID + ", name=" + firstName + lastName + ", email=" + email + ", phone=" + phone + "]";
	}
}