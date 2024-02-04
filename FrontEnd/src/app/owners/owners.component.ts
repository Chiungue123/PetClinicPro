import { Component, inject } from '@angular/core';

import { Owner } from '../models/owner';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OwnerService } from '../services/owner.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owners',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './owners.component.html',
  styleUrl: './owners.component.css'
})
export class OwnersComponent {

  //ownerService = inject(OwnerService);
  
  owners: Owner[] = [];

  constructor(private http: HttpClient, 
              private router: Router, 
              private ownerService: OwnerService) { }

  ngOnInit(): void {
    this.getOwners().subscribe(
      (owners: Owner[]) => {
        console.log("Owners: ", owners);
        this.owners = owners;
      });
  }

  getOwners(): Observable<Owner[]> {
    console.log("From Owner Service: Getting Owners");
    return this.ownerService.getOwners();
  }
  
  onAdd(): void {
    this.router.navigate(['/form'], { state: { data: "owners", action: 'Add' } });
  }

  onUpdate(id: Number): void {
    console.log("Update Owner: " + id);
    this.router.navigate(['/form'], { state: { data: "owners", action: 'Update/' + id } });
  }

  onDelete(id: Number): void {
    console.log("Delete Owner: " + id);
    this.ownerService.deleteOwner(id).subscribe(
      (response: any) => {
        console.log("Response: ", response);
        this.ownerService.getOwners().subscribe(
          (owners: Owner[]) => {
            console.log("Owners: ", owners);
            this.owners = owners;
          });
      },
      (error: any) => {
        console.error("Error: ", error);
      });
  }
}
