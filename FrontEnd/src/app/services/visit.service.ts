import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visit } from '../models/visit';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  constructor(private http: HttpClient) { }

  getVisit(id: Number): Observable<Visit> {
    //console.log("From Visit Service: Getting Visit: " + id);
    return this.http.get<Visit>("http://localhost:9050/visits/" + id);
  }

  getVisits(): Observable<Visit[]> {
    //console.log("From Visit Service: Getting Visits");
    return this.http.get<Visit[]>("http://localhost:9050/visits");
  }

  deleteVisit(id: Number) {
    //console.log("Delete Visit: " + id);
    //return this.http.delete("http://spring-container:9050/visits/" + id);
    return this.http.delete("http://localhost:9050/visits/" + id);
  }
}
