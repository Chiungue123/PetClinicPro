import { Component } from '@angular/core';
import { Visit } from '../models/visit';
import { CommonModule } from '@angular/common';
import { VisitService } from '../services/visit.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(/*private visitService: VisitService*/ private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getVisits().subscribe(
      (visits: Visit[]) => {
        console.log("Visits: " + visits);
        this.visits = visits;
      });
  }

  getVisits(): Observable<Visit[]>{
    console.log("Getting Visits");
    return this.http.get<Visit[]>("http://localhost:9050/visits");
  }

  /*getVisits(){
    console.log("Getting Visits");
    return this.visitService.getVisits();
  }*/

  onDelete(id: number): void {
    console.log("Delete Visit: " + id);
  }

  onAdd(): void {
    console.log("Add Visit");
    this.router.navigate(['/form'], { state: { data: "visits", action: 'Add' } });
    //this.router.navigate(['/owners/add']);
  }

  onUpdate(id: number): void {
    console.log("Update Visit: " + id);
    this.router.navigate(['/form'], { state: { data: "visits", action: 'Update/' + id } });
  }
}
