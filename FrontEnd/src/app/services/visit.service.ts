import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visit } from '../models/visit';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getVisit(id: Number): Observable<Visit> {
    return this.http.get<Visit>(`${this.apiUrl}visits/${id}`);
  }

  getVisits(): Observable<Visit[]> {
    return this.http.get<Visit[]>(`${this.apiUrl}visits`);
  }

  deleteVisit(id: Number) {
    return this.http.delete(`${this.apiUrl}visits/${id}`);
  }
}
