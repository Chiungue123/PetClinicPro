export class Pet {
    petID: number;
    name: string;
    breed: string;
    age: number;
    ownerID: number; // Reference to the Owner

    constructor(petID: number, name: string, breed: string, age: number, ownerID: number) {
        this.petID = petID;
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.ownerID = ownerID;
    }
}
