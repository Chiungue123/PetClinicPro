import { Component } from '@angular/core';
import { Pet } from '../models/pet';
import { Owner } from '../models/owner';
import { CommonModule } from '@angular/common';
import { PetService } from '../services/pet.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { OwnerService } from '../services/owner.service';
import { ToastrService } from 'ngx-toastr';

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
  isAddEnabled: boolean = false;

  constructor(private petService: PetService, 
              private ownerService: OwnerService, 
              private http: HttpClient, 
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.fetchPets();
    this.fetchOwners();
  }
  
  fetchPets() {
    this.petService.getPets().subscribe({
      next: (pets: Pet[]) => {
        this.pets = pets
        console.log("Pets: ", pets)
      },
      error: (err: any) => console.error(err) 
    });
  }

  fetchOwners() {
    this.ownerService.getOwners().subscribe({
      next: (owners: Owner[]) => this.isAddEnabled = owners.length > 0,
      error: (err: any) => console.error(err)
    });
  }

  onAdd(): void {
    if (!this.isAddEnabled) {
      this.toastr.error('Add an Owner to make a Pet.', 'Validation Error');
      return;
    }
    this.router.navigate(['/form'], { state: { data: "pets", action: 'Add' } });
  }

  onUpdate(id: Number): void {
    console.log("Update Pet: " + id);
    this.router.navigate(['/form'], { state: { data: "pets", action: 'Update/' + id } });
  }
  
  onDelete(id: Number): void {
    console.log("Delete Pet: " + id);
    this.petService.deletePet(id).subscribe({
      next: (response: any) => {
        console.log("Response: ", response);
        this.fetchPets();
      },
      error: (error: any) => console.log("Error: ", error) 
    })
  }
}
