import { Injectable } from '@angular/core';
import { Owner } from '../models/owner';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }


  addOwner(owner: Owner) { 
    //console.log("Add Owner: ", owner);
    return this.http.post("http://localhost:9050/owners", owner);
    //return this.http.post("http://spring-container:9050/owners", owner);
  }

  getOwners(): Observable<Owner[]> {
    //console.log("From Owner Service: Getting Owners");
    return this.http.get<Owner[]>("http://localhost:9050/owners");
    //return this.http.get<Owner[]>("http://spring-container:9050/owners");
  }

  getOwner(id: Number): Observable<Owner> {
    //console.log("From Owner Service: Getting Owner: " + id);
    return this.http.get<Owner>("http://localhost:9050/owners/" + id);
    //return this.http.get<Owner>("http://spring-container:9050/owners/" + id);
  }

  deleteOwner(id: Number) {
    //console.log("Delete Owner: " + id);
    return this.http.delete("http://localhost:9050/owners/" + id);
    //return this.http.delete("http://spring-container:9050/owners/" + id);
  }

  updateOwner(owner: Owner) {
   //console.log("Update Owner: ", owner);
   return this.http.put("http://localhost:9050/owners/update/" + owner.ownerID, owner);
   //return this.http.put("http://spring-container:9050/owners/update/" + owner.ownerID, owner);
  }
}
