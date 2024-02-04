export class Pet {
    petID: Number;
    name: String;
    breed: string;
    age: number;
    ownerID: Number; // Reference to the Owner

    constructor(petID: Number, name: string, breed: string, age: number, ownerID: Number) {
        this.petID = petID;
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.ownerID = ownerID;
    }
}
