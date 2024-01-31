import { Component } from '@angular/core';

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

  owner!: Owner;
  owners: Owner[] = [];

  constructor(private http: HttpClient, private router: Router, /*private ownerService: OwnerService*/) { }

  ngOnInit(): void {
    this.getOwners().subscribe(
      (owners: Owner[]) => {
        console.log("Owners: ", owners);
        this.owners = owners;
      });
  }

  getOwners(): Observable<Owner[]> {
    console.log("From Owner Component: Getting Owners");
    return this.http.get<Owner[]>("http://localhost:9050/owners");
  }

  /*getOwners() {
    return this.ownerService.getOwners();
  }*/
  
  onAdd(): void {
    this.router.navigate(['/form'], { state: { data: "owners", action: 'Add' } });
  }

  onUpdate(id: number): void {
    this.router.navigate(['/form'], { state: { data: "owners", action: 'Update/' + id } });
  }

  onDelete(id: number): void {
    console.log("Delete Owner: " + id);
  }
}
