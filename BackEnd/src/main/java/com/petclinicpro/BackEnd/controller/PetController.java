package com.petclinicpro.BackEnd.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petclinicpro.BackEnd.jpa.Pet;
import com.petclinicpro.BackEnd.service.PetService;

@RestController
@RequestMapping("/pets")
//@CrossOrigin(origins = "http://localhost:4200")
//@CrossOrigin(origins = "http://ec2-35-92-147-200.us-west-2.compute.amazonaws.com:4200")
@CrossOrigin(origins = "*")
public class PetController {

	@Autowired
	PetService petService;
	
	final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@GetMapping()
	public List<Pet> getPets() {
		logger.info("PET CONTROLLER: Getting Pets");
		return this.petService.getPets();
	}
	
	@GetMapping("/{id}")
	public Pet getPetById(@PathVariable("id") Integer id) {
		logger.info("PET CONTROLLER: Getting Pet by ID: " + id);
		return this.petService.getPetById(id);
	}
	
	@PostMapping("/add")
	public Pet addPet(@RequestBody Pet pet) {
		logger.info("PET CONTROLLER: Adding Pet: " + pet.toString());
		return this.petService.addPet(pet);
	}
	
	@PutMapping("/update/{id}")
	public Pet updatePet(@PathVariable("id") Integer id, @RequestBody Pet pet) {
		logger.info("PET CONTROLLER: Updating Pet: " + pet.toString());
		return this.petService.updatePet(id, pet);
	}
	
	@DeleteMapping("/{id}")
	public void deletePet(@PathVariable("id") Integer id) {
		logger.info("PET CONTROLLER: Deleting Pet by ID: " + id);
		this.petService.deletePetById(id);
	}
}
