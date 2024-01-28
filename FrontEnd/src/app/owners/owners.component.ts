import { Component } from '@angular/core';

import { Owner } from '../models/owner';
import { CommonModule } from '@angular/common';
//import { OwnerService } from '../services/owner.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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

  owners: Owner[] = [];

  constructor(/*private ownerService: OwnerService, */private http: HttpClient) { }

  ngOnInit(): void {
    this.getOwners().subscribe((owners: Owner[]) => this.owners = owners);
  }

  getOwners(): Observable<Owner[]> {
    console.log("From Owner Component: Getting Owners");
    return this.http.get<Owner[]>("http://localhost:9050/owners");
  }

  /*
  getOwners() {
    return this.ownerService.getOwners();
  }
  */
  onUpdate(id: number): void {
    console.log("Update Owner: " + id);
  }

  onDelete(id: number): void {
    console.log("Delete Owner: " + id);
  }

  onAdd(): void {
    console.log("Add Visit");
  }
}
