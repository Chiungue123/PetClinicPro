import { Injectable } from '@angular/core';
import { Owner } from '../models/owner';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  getOwners(): Observable<Owner[]> {
    console.log("From Owner Service: Getting Owners");
    return this.http.get<Owner[]>("http://localhost:9050/owners");
  }
}
