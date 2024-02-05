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
  pets: Pet[] = [];
  isAddEnabled: boolean = false;

  constructor(private visitService: VisitService, 
              private http: HttpClient, 
              private router: Router,
              private toastr: ToastrService,
              private ownerService: OwnerService,
              private petService: PetService) { }

  ngOnInit(): void {
    this.fetchPets();
    this.fetchVisits();
  }

  fetchPets() {
    this.petService.getPets().subscribe({
      next: (pets: Pet[]) => this.isAddEnabled = pets.length > 0,
      error: (err: any) => console.error(err) 
    });
  }

  fetchVisits(){
    this.visitService.getVisits().subscribe({
      next: (visits: Visit[]) => {
        this.visits = visits
        console.log("Visits: ", visits)
      },
      error: (err: any) => console.error(err)
    });
  }

  onDelete(id: Number): void {
    this.visitService.deleteVisit(id).subscribe({
      next: (response: any) => this.fetchVisits(),
      error: (Error: any) => console.error(Error)
    });
  }

  onAdd(): void {
    if (!this.isAddEnabled) {
      this.toastr.error('Make a Pet to make a Visit.', 'Validation Error');
      return;
    }
    this.router.navigate(['/form'], { state: { data: "visits", action: 'Add' } });
  }

  onUpdate(id: Number): void {
    this.router.navigate(['/form'], { state: { data: "visits", action: 'Update/' + id } });
  }
}
