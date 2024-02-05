package com.petclinicpro.BackEnd.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@GetMapping("/{id}")
	public Visit getVisitById(@PathVariable("id") Integer id) {
		logger.info("VISIT CONTROLLER: Getting Visit by ID: " + id);
		return this.visitService.getVisitById(id);
	}
	
	@PostMapping("/add")
	public Visit addVisit(@RequestBody Visit visit) {
		logger.info("VISIT CONTROLLER: Adding Visit: " + visit.toString());
		return this.visitService.addVisit(visit);
	}
	
	@PutMapping("/update/{id}")
	public Visit updateVisit(@PathVariable("id") Integer id, @RequestBody Visit visit) {
		logger.info("VISIT CONTROLLER: Updating Visit: " + visit.toString());
		return this.visitService.updateVisit(id, visit);
	}
	
	@DeleteMapping("/{id}")
	public void deleteVisit(@PathVariable("id") Integer id) {
		logger.info("VISIT CONTROLLER: Deleting Visit by ID: " + id);
		this.visitService.deleteVisitById(id);
	}

}
