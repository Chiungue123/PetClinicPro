package com.petclinicpro.BackEnd.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petclinicpro.BackEnd.jpa.Owner;
import com.petclinicpro.BackEnd.repository.OwnerRepository;

@Service
public class OwnerService {
	
	final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired OwnerRepository ownerRepository;

	public List<Owner> getOwners() {
		logger.info("OWNER SERVICE: Getting Owners");
		return this.ownerRepository.findAll();
	}
	
	public Owner getOwnerById(int id) {
		logger.info("OWNER SERVICE: Getting Owner by ID: " + id);
		return this.ownerRepository.findById(id).get();
	}

	public Owner addOwner(Owner owner) {
		logger.info("OWNER SERVICE: Adding Owner: " + owner.toString());
		return this.ownerRepository.save(owner);
	}

	public Owner updateOwner(int id, Owner owner) {
		logger.info("OWNER SERVICE: Updating Owner: " + owner.toString());
		
		this.ownerRepository.findById(id)
		.ifPresent(u -> {
					u.setFirstName(owner.getFirstName());
					u.setLastName(owner.getLastName());
					u.setEmail(owner.getEmail());
					u.setPhone(owner.getPhone());
					this.ownerRepository.save(u);
		});
		
		return this.ownerRepository.findById(id).get();
	}

	public void deleteOwner(int id) {
		logger.info("OWNER SERVICE: Deleting Owner by ID: " + id);
		this.ownerRepository.deleteById(id);
	}
}
