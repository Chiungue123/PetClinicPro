package com.petclinicpro.BackEnd.jpa;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "Visit")
public class Visit {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "visitID")
	private Integer visitID;
	
	@Column(name = "petID")
	private Integer petID;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
    @Temporal(TemporalType.TIMESTAMP)
	@Column(name = "dateOfVisit")
	private Date dateOfVisit;
	
	@Column(name = "reasonOfVisit")
	private String reasonOfVisit;
	
	@Column(name = "treatmentNotes")
	private String treatmentNotes;

	public Visit() {
	}

	public Visit(Integer visitID, Integer petID, Date dateOfVisit, String reasonOfVisit, String treatmentNotes) {
		super();
		this.visitID = visitID;
		this.petID = petID;
		this.dateOfVisit = dateOfVisit;
		this.reasonOfVisit = reasonOfVisit;
		this.treatmentNotes = treatmentNotes;
	}

	public Integer getVisitID() {
		return visitID;
	}

	public void setVisitID(Integer visitID) {
		this.visitID = visitID;
	}

	public Integer getPetID() {
		return petID;
	}

	public void setPetID(Integer petID) {
		this.petID = petID;
	}

	public Date getDateOfVisit() {
		return dateOfVisit;
	}

	public void setDateOfVisit(Date dateOfVisit) {
		this.dateOfVisit = dateOfVisit;
	}

	public String getReasonOfVisit() {
		return reasonOfVisit;
	}

	public void setReasonOfVisit(String reasonOfVisit) {
		this.reasonOfVisit = reasonOfVisit;
	}

	public String getTreatmentNotes() {
		return treatmentNotes;
	}

	public void setTreatmentNotes(String treatmentNotes) {
		this.treatmentNotes = treatmentNotes;
	}

	@Override
	public String toString() {
		return "Visit [visitID=" + visitID + ", petID=" + petID + ", dateOfVisit=" + dateOfVisit + ", reasonOfVisit="
				+ reasonOfVisit + ", treatmentNotes=" + treatmentNotes + "]";
	}
}