import { Pet } from "./pet";

export class Owner {
    ownerID: number;
    name: string;
    email: string;
    phone: string;
    pets: Pet[]; // Array of Pet objects

    constructor(ownerID: number, name: string, email: string, phone: string, pets: Pet[]) {
        this.ownerID = ownerID;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.pets = pets;
    }
}
