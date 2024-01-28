package com.petclinicpro.BackEnd.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petclinicpro.BackEnd.jpa.Owner;
import com.petclinicpro.BackEnd.repository.OwnerRepository;

@Service
public class OwnerService {

	@Autowired OwnerRepository ownerRepository;

	public List<Owner> getOwners() {
		return this.ownerRepository.findAll();
	}
	
}
