import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../models/pet';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.apiUrl}pets`);
  }

  getPet(id: Number): Observable<Pet> {
    return this.http.get<Pet>(`${this.apiUrl}pets/${id}`);
  }

  addPet(pet: Pet) {
    return this.http.post(`${this.apiUrl}pets`, pet);
  }

  updatePet(pet: Pet) {
    return this.http.put(`${this.apiUrl}pets/update/${pet.petID}`, pet);
  }

  deletePet(id: Number) {
    return this.http.delete(`${this.apiUrl}pets/${id}`);
  }
}
