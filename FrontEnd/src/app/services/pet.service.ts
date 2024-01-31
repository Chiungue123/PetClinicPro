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
}
