import { Component } from '@angular/core';
import { Visit } from '../models/visit';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visits',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './visits.component.html',
  styleUrl: './visits.component.css'
})
export class VisitsComponent {

  visit: Visit = new Visit(1, 1, new Date('2020-01-01'), "Check up", "All good")

  constructor() { }

  ngOnInit(): void {
  }

  getVisits(): void {
    console.log("Get Visits");
  }

  onUpdate(id: number): void {
    console.log("Update Visit: " + id);
  }

  onDelete(id: number): void {
    console.log("Delete Visit: " + id);
  }

  onAdd(): void {
    console.log("Add Visit");
  }
}
