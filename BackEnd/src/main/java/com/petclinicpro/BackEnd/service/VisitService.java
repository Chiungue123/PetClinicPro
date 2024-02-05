package com.petclinicpro.BackEnd.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.petclinicpro.BackEnd.jpa.Visit;
import com.petclinicpro.BackEnd.repository.VisitRepository;

@Service
public class VisitService {
	
	@Autowired VisitRepository visitRepository;

	public List<Visit> getVisits() {
		return this.visitRepository.findAll();
	}
	
	public Visit getVisitById(Integer id) {
		return this.visitRepository.findById(id).get();
	}

	public Visit addVisit(Visit visit) {
		return this.visitRepository.save(visit);
	}

	public Visit updateVisit(Integer id, Visit visit) {
		this.visitRepository.findById(id).ifPresent(u -> {
			u.setDateOfVisit(visit.getDateOfVisit());
			u.setReasonOfVisit(visit.getReasonOfVisit());
			u.setTreatmentNotes(visit.getTreatmentNotes());
			u.setPetID(visit.getPetID());
			this.visitRepository.save(u);
		});
		
		return this.visitRepository.findById(id).get();
	}
	
	public void deleteVisitById(Integer id) {
		this.visitRepository.deleteById(id);
	}

}