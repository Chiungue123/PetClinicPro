package com.petclinicpro.BackEnd.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petclinicpro.BackEnd.repository.OwnerRepository;

@Service
public class OwnerService {

	@Autowired OwnerRepository ownerRepository;
	
}
