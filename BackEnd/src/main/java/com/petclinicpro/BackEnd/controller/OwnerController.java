package com.petclinicpro.BackEnd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petclinicpro.BackEnd.jpa.Owner;
import com.petclinicpro.BackEnd.service.OwnerService;

@RestController
@RequestMapping("/owners")
@CrossOrigin(origins = "http://localhost:4200")
public class OwnerController {

	Owner owner;
	@Autowired OwnerService ownerService;
	
	@GetMapping()
	public List<Owner> getOwners() {
		return this.ownerService.getOwners();
	}
	
}
