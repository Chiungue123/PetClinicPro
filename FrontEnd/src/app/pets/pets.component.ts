import { Component } from '@angular/core';

import { Pet } from '../models/pet';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent {

  pet: Pet = new Pet(1, "Name", "Breed", 7, 1)

  constructor() { }

  ngOnInit(): void {
  }

  getPets(): void {
    console.log("Get Pets");
  }

  onUpdate(id: number): void {
    console.log("Update Pet: " + id);
  }

  onDelete(id: number): void {
    console.log("Delete Pet: " + id);
  }

  onAdd(): void {
    console.log("Add Visit");
  }
}
