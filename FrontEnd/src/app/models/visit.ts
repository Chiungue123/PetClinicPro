export class Visit {
    visitID: number;
    petID: number; // Reference to the Pet
    dateOfVisit: Date;
    reasonOfVisit: string;
    treatmentNotes: string;

    constructor(visitID: number, petID: number, dateOfVisit: Date, reasonOfVisit: string, treatmentNotes: string) {
        this.visitID = visitID;
        this.petID = petID;
        this.dateOfVisit = dateOfVisit;
        this.reasonOfVisit = reasonOfVisit;
        this.treatmentNotes = treatmentNotes;
    }
}
