import { Component } from '@angular/core';
import { Visit } from '../models/visit';
import { CommonModule } from '@angular/common';
import { VisitService } from '../services/visit.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { OwnerService } from '../services/owner.service';
import { PetService } from '../services/pet.service';
import { Owner } from '../models/owner';
import { Pet } from '../models/pet';

@Component({
  selector: 'app-visits',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './visits.component.html',
  styleUrl: './visits.component.css'
})
export class VisitsComponent {

  visits: Visit[] = [];
  isAddEnabled: boolean = false;

  constructor(private visitService: VisitService, 
              private http: HttpClient, 
              private router: Router,
              private toastr: ToastrService,
              private ownerService: OwnerService,
              private petService: PetService) { }

  ngOnInit(): void {
    this.getVisits().subscribe(
      (visits: Visit[]) => {
        console.log("Visits: ", visits);
        this.visits = visits;
      });
    this.isAddEnabled = this.validateAddOwners();
  }

  getVisits(){
    console.log("Getting Visits");
    return this.visitService.getVisits();
  }

  onDelete(id: Number): void {
    console.log("Delete Visit: " + id);
  }

  onAdd(): void {
    if (!this.isAddEnabled) {
      this.toastr.error('At least one owner must exist before adding a pet.', 'Validation Error');
      return;
    }

    this.router.navigate(['/form'], { state: { data: "visits", action: 'Add' } });
    //this.router.navigate(['/owners/add']);
  }

  onUpdate(id: Number): void {
    console.log("Update Visit: " + id);
    this.router.navigate(['/form'], { state: { data: "visits", action: 'Update/' + id } });
  }

  validateAddOwners(): boolean {

    let ownersExist: boolean = false;
    let petsExist: boolean = false;
  
    this.ownerService.getOwners().subscribe(
      (owners: Owner[]) => {
        ownersExist = owners.length > 0;
        console.log("Owners Exist: ", ownersExist);
      }
    );

    this.petService.getPets().subscribe(
      (pets: Pet[]) => {
        petsExist = pets.length > 0;
        console.log("Pets Exist: ", petsExist);
      }
    );

    if (petsExist && ownersExist) {
      return true;
    }

    return false;
  }
}
