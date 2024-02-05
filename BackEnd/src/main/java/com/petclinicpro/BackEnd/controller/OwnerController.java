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

import com.petclinicpro.BackEnd.jpa.Owner;
import com.petclinicpro.BackEnd.service.OwnerService;

@RestController
@RequestMapping("/owners")
@CrossOrigin(origins = "http://localhost:4200")
public class OwnerController {

	@Autowired 
	OwnerService ownerService;
	
	Owner owner;
	
	final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@GetMapping()
	public List<Owner> getOwners() {
		logger.info("OWNER CONTROLLER: Getting Owners");
		return this.ownerService.getOwners();
	}
	
	@GetMapping("/{id}")
	public Owner getOwnerById(@PathVariable("id") Integer id) {
		logger.info("OWNER CONTROLLER: Getting Owner by ID: " + id);
		return this.ownerService.getOwnerById(id);
	}
	
	@PostMapping("/add")
	public Owner addOwner(@RequestBody Owner owner) {
		logger.info("OWNER CONTROLLER: Adding Owner: " + owner.toString());
		return this.ownerService.addOwner(owner);
	}
		
	@PutMapping("/update/{id}")
	public Owner updateOwner(@PathVariable("id") Integer id, @RequestBody Owner owner) {
		logger.info("OWNER CONTROLLER: Updating Owner: " + owner.toString());
		return this.ownerService.updateOwner(id, owner);
	}
	
	@DeleteMapping("/{id}")
	public void deleteOwner(@PathVariable("id") Integer id) {
		logger.info("OWNER CONTROLLER: Deleting Owner by ID: " + id);
		this.ownerService.deleteOwner(id);
	}
	
}
