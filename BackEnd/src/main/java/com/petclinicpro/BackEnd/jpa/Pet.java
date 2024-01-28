package com.petclinicpro.BackEnd.jpa;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Pets")
public class Pet {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "petID")
	private Integer petID;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "breed")
	private String breed;
	
	@Column(name = "age")
	private Integer age;
	
	@Column(name = "ownerID")
	private Integer ownerID;

	public Pet() {
	}

	public Pet(Integer petID, String name, String breed, Integer age, Integer ownerID) {
		super();
		this.petID = petID;
		this.name = name;
		this.breed = breed;
		this.age = age;
		this.ownerID = ownerID;
	}

	public Integer getPetID() {
		return petID;
	}

	public void setPetID(Integer petID) {
		this.petID = petID;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBreed() {
		return breed;
	}

	public void setBreed(String breed) {
		this.breed = breed;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public Integer getOwnerID() {
		return ownerID;
	}

	public void setOwnerID(Integer ownerID) {
		this.ownerID = ownerID;
	}

	@Override
	public String toString() {
		return "Pet [petID=" + petID + ", name=" + name + ", breed=" + breed + ", age=" + age + ", ownerID=" + ownerID
				+ "]";
	}	
}