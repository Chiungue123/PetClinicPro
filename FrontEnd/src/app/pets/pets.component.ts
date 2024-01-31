import { Component } from '@angular/core';
import { Pet } from '../models/pet';
import { CommonModule } from '@angular/common';
import { PetService } from '../services/pet.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent {

  pets: Pet[] = [];

  constructor(/*private petService: PetService*/ private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getPets().subscribe(
      (pets: Pet[]) => {
        console.log("Pets: " + pets);
        this.pets = pets;
      });
  }

  getPets(): Observable<Pet[]>{
    console.log("Getting Pets");
    return this.http.get<Pet[]>("http://localhost:9050/pets");
  }

  /*getPets() {
    console.log("Getting Pets");
    return this.petService.getPets();
  }*/

  onDelete(id: number): void {
    console.log("Delete Pet: " + id);
  }

  onAdd(): void {
    console.log("Add Pet");
    this.router.navigate(['/form'], { state: { data: "pets", action: 'Add' } });
    //this.router.navigate(['/owners/add']);
  }

  onUpdate(id: number): void {
    console.log("Update Pet: " + id);
    this.router.navigate(['/form'], { state: { data: "pets", action: 'Update/' + id } });
  }
}
