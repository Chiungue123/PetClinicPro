export class Visit {
    visitID: Number;
    petID: Number; // Reference to the Pet
    dateOfVisit: Date;
    reasonOfVisit: string;
    treatmentNotes: string;

    constructor(visitID: Number, petID: number, dateOfVisit: Date, reasonOfVisit: string, treatmentNotes: string) {
        this.visitID = visitID;
        this.petID = petID;
        this.dateOfVisit = dateOfVisit;
        this.reasonOfVisit = reasonOfVisit;
        this.treatmentNotes = treatmentNotes;
    }
}
