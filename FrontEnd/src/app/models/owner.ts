import { Pet } from "./pet";

export class Owner {
    ownerID: Number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    pets: Pet[]; // Array of Pet objects

    constructor(ownerID: Number, firstName: string, lastName: string, email: string, phone: string, pets: Pet[]) {
        this.ownerID = ownerID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.pets = pets;
    }
}
