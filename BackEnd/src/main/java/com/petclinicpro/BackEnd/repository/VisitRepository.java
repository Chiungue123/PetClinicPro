package com.petclinicpro.BackEnd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petclinicpro.BackEnd.jpa.Visit;

public interface VisitRepository extends JpaRepository<Visit, Integer> {

}
