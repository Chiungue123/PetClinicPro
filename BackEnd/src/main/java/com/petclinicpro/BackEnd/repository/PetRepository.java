package com.petclinicpro.BackEnd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petclinicpro.BackEnd.jpa.Pet;

public interface PetRepository extends JpaRepository<Pet, Integer>{

}
