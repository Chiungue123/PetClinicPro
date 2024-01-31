package com.petclinicpro.BackEnd.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petclinicpro.BackEnd.jpa.Visit;
import com.petclinicpro.BackEnd.service.VisitService;

@RestController
@RequestMapping("/visits")
@CrossOrigin(origins = "http://localhost:4200")
public class VisitController {
	
	@Autowired
	VisitService visitService;
	
	final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@GetMapping()
	public List<Visit> getVisits() {
		logger.info("VISIT CONTROLLER: Getting Visits");
		return this.visitService.getVisits();
	}
	
	

}
