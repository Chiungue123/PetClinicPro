import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  getPets(): Observable<Pet[]> {
    console.log("From Pet Service: Getting Pets");
    return this.http.get<Pet[]>("http://localhost:9050/pets");
  }

  getPet(id: Number): Observable<Pet> {
    console.log("From Pet Service: Getting Pet: " + id);
    return this.http.get<Pet>("http://localhost:9050/pets/" + id);
  }

  addPet(pet: Pet) {
    console.log("Add Pet: ", pet);
    return this.http.post("http://localhost:9050/pets", pet);
  }

  updatePet(pet: Pet) {
    console.log("Update Pet: ", pet);
    return this.http.put("http://localhost:9050/pets/update/" + pet.petID, pet);
  }

  deletePet(id: Number) {
    console.log("Delete Pet: " + id);
    return this.http.delete("http://localhost:9050/pets/" + id);
  }
}
