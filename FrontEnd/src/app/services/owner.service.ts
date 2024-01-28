import { Injectable } from '@angular/core';
import { Owner } from '../models/owner';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  getOwners(): Observable<Owner[]> {
    console.log("From Owner Service: Getting Owners");
    return this.http.get<Owner[]>("http://localhost:8080/owners");
  }
}
