import { Injectable } from '@angular/core';
import { Owner } from '../models/owner';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  addOwner(owner: Owner) {
    return this.http.post(`${this.apiUrl}/owners`, owner);
  }

  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(`${this.apiUrl}/owners`);
  }

  getOwner(id: Number): Observable<Owner> {
    return this.http.get<Owner>(`${this.apiUrl}/owners/${id}`);
  }

  deleteOwner(id: Number) {
    return this.http.delete(`${this.apiUrl}/owners/${id}`);
  }

  updateOwner(owner: Owner) {
    return this.http.put(`${this.apiUrl}/owners/update/${owner.ownerID}`, owner);
  }
}
