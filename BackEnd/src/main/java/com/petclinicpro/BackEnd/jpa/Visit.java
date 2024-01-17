package com.petclinicpro.BackEnd.jpa;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Visit")
public class Visit {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "visitID")
	private Integer visitID;
	
	@Column(name = "petID")
	private Integer petID;
	
	@Column(name = "dateOfVisit")
	private String dateOfVisit;
	
	@Column(name = "reasonOfVisit")
	private String reasonOfVisit;
	
	@Column(name = "treatmentNotes")
	private String treatmentNotes;

	public Visit() {
	}

	public Visit(Integer visitID, Integer petID, String dateOfVisit, String reasonOfVisit, String treatmentNotes) {
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

	public String getDateOfVisit() {
		return dateOfVisit;
	}

	public void setDateOfVisit(String dateOfVisit) {
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

/*

CREATE TABLE Visits (
    visitID INT AUTO_INCREMENT PRIMARY KEY,
    petID INT,
    dateOfVisit DATE NOT NULL,
    reasonOfVisit TEXT,
    treatmentNotes TEXT,
    FOREIGN KEY (petID) REFERENCES Pets(petID)
);


*/