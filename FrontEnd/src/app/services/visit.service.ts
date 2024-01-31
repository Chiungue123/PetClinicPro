import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visit } from '../models/visit';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  constructor(private http: HttpClient) { }

  getVisits(): Observable<Visit[]> {
    console.log("From Visit Service: Getting Visits");
    return this.http.get<Visit[]>("http://localhost:9050/visits");
  }
}
