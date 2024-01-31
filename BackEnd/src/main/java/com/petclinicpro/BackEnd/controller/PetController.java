package com.petclinicpro.BackEnd.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petclinicpro.BackEnd.jpa.Pet;
import com.petclinicpro.BackEnd.service.PetService;

@RestController
@RequestMapping("/pets")
@CrossOrigin(origins = "http://localhost:4200")
public class PetController {

	@Autowired
	PetService petService;
	
	@GetMapping()
	public List<Pet> getPets() {
		return this.petService.getPets();
	}
	
}
