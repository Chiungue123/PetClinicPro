package com.petclinicpro.BackEnd.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petclinicpro.BackEnd.jpa.Pet;
import com.petclinicpro.BackEnd.repository.PetRepository;

@Service
public class PetService {

	@Autowired PetRepository petRepository;

	public List<Pet> getPets() {
		return this.petRepository.findAll();
	}

	public Pet getPetById(int id) {
		return this.petRepository.findById(id).get();
	}

	public Pet addPet(Pet pet) {
		return this.petRepository.save(pet);
	}

	public Pet updatePet(int id, Pet pet) {
		this.petRepository.findById(id)
				.ifPresent(p -> {
					p.setName(pet.getName());
					p.setBreed(pet.getBreed());
					p.setAge(pet.getAge());
					this.petRepository.save(p);
				});
		
		return this.petRepository.findById(id).get();
	}

	public void deletePetById(int id) {
		this.petRepository.deleteById(id);	
	}
	
}
