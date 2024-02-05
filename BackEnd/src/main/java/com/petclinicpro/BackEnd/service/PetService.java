package com.petclinicpro.BackEnd.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petclinicpro.BackEnd.jpa.Pet;
import com.petclinicpro.BackEnd.repository.PetRepository;

@Service
public class PetService {

	@Autowired PetRepository petRepository;
	
	final Logger logger = LoggerFactory.getLogger(this.getClass());

	public List<Pet> getPets() {
		
	    logger.info("PET SERVICE: Getting Pets");
		return this.petRepository.findAll();
	}

	public Pet getPetById(Integer id) {
		
		logger.info("PET SERVICE: Getting Pet by ID: " + id);
		return this.petRepository.findById(id).get();
	}

	public Pet addPet(Pet pet) {
		
		logger.info("PET SERVICE: Adding Pet: " + pet.toString());
		
		this.validatePet(pet);
		return this.petRepository.save(pet);
	}

	public Pet updatePet(Integer id, Pet pet) {
		
		logger.info("PET SERVICE: Updating Pet: " + pet.toString());
		
		this.validatePet(pet);
		this.petRepository.findById(id)
				.ifPresent(p -> {
					p.setName(pet.getName());
					p.setBreed(pet.getBreed());
					p.setAge(pet.getAge());
					this.petRepository.save(p);
				});
		
		return this.petRepository.findById(id).get();
	}

	public void deletePetById(Integer id) {
		logger.info("PET SERVICE: Deleting Pet by ID: " + id);
		this.petRepository.deleteById(id);	
	}
	
	private void validatePet(Pet pet) {
		
		if (pet.getOwnerID().equals(null)) {
			throw new RuntimeException("Owner ID cannot be null");
		} else if (pet.getName().equals(null)) {
			throw new RuntimeException("Pet name cannot be null");
        } else if (pet.getBreed().equals(null)) {
            throw new RuntimeException("Pet breed cannot be null");
        } else if (pet.getAge().equals(null)) {
            throw new RuntimeException("Pet age cannot be null");
		}
	}
	
}
