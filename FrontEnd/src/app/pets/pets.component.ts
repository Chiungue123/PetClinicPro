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
    this.getPets().subscribe(
      (pets: Pet[]) => {
        console.log("Pets: ", pets);
        this.pets = pets;
      });

    this.ownerService.getOwners().subscribe(
      (owners: Owner[]) => {
        this.isAddEnabled = owners.length > 0;
        console.log("Is Add Enabled: ", this.isAddEnabled)
      }
    );
  }

  getPets() {
    console.log("Getting Pets");
    return this.petService.getPets();
  }

  onAdd(): void {
    if (!this.isAddEnabled) {
      this.toastr.error('At least one owner must exist before adding a pet.', 'Validation Error');
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
    this.petService.deletePet(id).subscribe(
      (response: any) => {
        console.log("Response: ", response);
        this.petService.getPets().subscribe(
          (pets: Pet[]) => {
            console.log("Pets: ", pets);
            this.pets = pets;
          });
      },
      (error: any) => {
        console.log("Error: ", error);
      }
    )
  }
}
