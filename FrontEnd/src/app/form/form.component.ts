import { Component } from '@angular/core';
import { Owner } from '../models/owner';
import { Visit } from '../models/visit';
import { Pet } from '../models/pet';

import { API_CONSTANTS } from '../shared/api-constants';
import { InputTypes } from '../shared/input-types';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  dynamicForm!: FormGroup;
  sub!: Subscription;

  label!: string[];
  inputTypes!: { [key: string]: string };

  owner!: Owner;
  visit!: Visit;
  pet!: Pet;

  formControls: string[] = [];

  action!: string;
  dataType!: string;
  

  constructor(private router: Router, 
              private fb: FormBuilder, 
              private http: HttpClient,
              private toastr: ToastrService
            ){

    const navigation = this.router.getCurrentNavigation();

    // Check if navigation, state.extras and state.extras.state are defined
    if (navigation && navigation.extras && navigation.extras.state) {
      const state = navigation.extras.state as { data: string, action: string };

      this.dataType = state.data;
      this.action = state.action; 
      
      // Set the labels and input types based on the data type
      if (this.dataType === "owners") {
        this.label = ["First Name", "Last Name", "Email", "Phone"];
        this.inputTypes = new InputTypes().ownerTypes;

      } else if (this.dataType === "visits") {
        this.label = ["Date of Visit", "Reason of Visit", "Treatment Notes"];
        this.inputTypes = new InputTypes().visitTypes;

      } else if (this.dataType === "pets") {
        this.label = ["Name", "Breed", "Age"];
        this.inputTypes = new InputTypes().petTypes;
      }
    }
  }

  ngOnInit(): FormGroup { 
    if (this.action.includes("Update")) {
      let id = parseInt(this.action.split("/")[1]);
      this.dynamicForm = this.updateForm(this.dataType, id);

    } else if (this.action.includes("Add")) {
      this.dynamicForm = this.createForm(this.dataType);
    }
    for (let value in this.dynamicForm.controls) {
      this.formControls.push(value.valueOf());
    }
    return this.dynamicForm;
  }

  createForm(dataType: string): any {
    if (dataType === "owners") {
      return this.dynamicForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required]
      });

    } else if (dataType === "visits") {
      return this.dynamicForm = this.fb.group({
        //visitID: ['', Validators.required],
        //petID: ['', Validators.required],
        dateOfVisit: ['', Validators.required],
        reasonOfVisit: ['', Validators.required],
        treatmentNotes: ['', Validators.required]
      });

    } else if (dataType === "pets") {
      return this.dynamicForm = this.fb.group({
        //petID: ['', Validators.required],
        name: ['', Validators.required],
        breed: ['', Validators.required],
        age: ['', Validators.required],
        //ownerID: ['', Validators.required]
      });
    } else {  
      console.log("Invalid Data Type");
    }
  }

  updateForm(dataType: string, id: number): any {
    if (dataType === 'owners'){
      this.getOwner(id).subscribe(
        (owner: Owner) => {
          this.owner = owner;
          return this.dynamicForm = this.fb.group({
            firstName: [this.owner.firstName, Validators.required],
            lastName: [this.owner.lastName, Validators.required],
            email: [this.owner.email, Validators.required],
            phone: [this.owner.phone, Validators.required]
          });
        },(error: any) => {
          console.error("Error: ", error);
        });

    } else if (dataType === 'visits') {
      this.getVisit(id).subscribe(
        (visit: Visit) => {
          this.visit = visit;
          return this.dynamicForm = this.fb.group({
            //visitID: [this.visit.visitID, Validators.required],
            //petID: [this.visit.petID, Validators.required],
            dateOfVisit: [this.visit.dateOfVisit, Validators.required],
            reasonOfVisit: [this.visit.reasonOfVisit, Validators.required],
            treatmentNotes: [this.visit.treatmentNotes, Validators.required]
          });
        },(error: any) => {
          console.error("Error: ", error);
        });

    } else if (dataType === 'pets') {
      this.getPet(id).subscribe(
        (pet: Pet) => {
          this.pet = pet;
          return this.dynamicForm = this.fb.group({
            //petID: [this.pet.petID, Validators.required],
            name: [this.pet.name, Validators.required],
            breed: [this.pet.breed, Validators.required],
            age: [this.pet.age, Validators.required],
            //ownerID: [this.pet.ownerID, Validators.required]
          });
        },(error: any) => {
          console.error("Error: ", error);
        });
      } 
  }
  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>("http://localhost:9050/pets/" + id);
  }
  
  getVisit(id: number): Observable<Visit> {
    return this.http.get<Visit>("http://localhost:9050/visits/" + id);
  }

  getOwner(id: number): Observable<Owner> {
    return this.http.get<Owner>("http://localhost:9050/owners/" + id);
  }

  onSubmit(): void {
    if (this.action.includes("Add")) {
      this.add(this.dataType);

    } else if (this.action.includes("Update")) {
      let id = parseInt(this.action.split("/")[1]);
      this.update(this.dataType, id);

    } else { 
      console.log("Invalid Action");
    }
  }

  add(dataType: string) {
    // Determine the correct endpoint based on the dataType
    let endpoint = '';
    switch(dataType) {
        case 'owners':
            endpoint = API_CONSTANTS.endpoints.owners;
            break;
        case 'pets':
            endpoint = API_CONSTANTS.endpoints.pets;
            break;
        case 'visits':
            endpoint = API_CONSTANTS.endpoints.visits;
            break;
        default:
            console.error('Invalid data type');
            return;
    }

    // Construct the full URL using the base URL and the determined endpoint
    const url = API_CONSTANTS.baseUrl + endpoint + '/add';

    console.log("URL: ", url, this.dynamicForm.value);

    // Make the HTTP POST request
    this.sub = this.http.post<Object>(url, this.dynamicForm.value).subscribe(
        (response: Object) => {
            console.log("Response: ", response);
            this.toastr.success('Form Creation Successful', 'Success');
            // Handle the response
        },
        (error: any) => {
            console.error("Error: ", error);
            this.toastr.error('Error Creating form', 'Error');
            // Handle the error
        }
    );
  }

  update(dataType: string, id: number) {
    // Determine the correct endpoint based on the dataType
    let endpoint = '';
    switch(dataType) {
        case 'owners':
            endpoint = API_CONSTANTS.endpoints.owners;
            break;
        case 'pets':
            endpoint = API_CONSTANTS.endpoints.pets;
            break;
        case 'visits':
            endpoint = API_CONSTANTS.endpoints.visits;
            break;
        default:
            console.error('Invalid data type');
            return;
    }

    const url = API_CONSTANTS.baseUrl + endpoint + '/update/' + id;

    console.log("URL: ", url, this.dynamicForm.value);

    // Make the HTTP PUT request
    this.sub = this.http.put<Object>(url, this.dynamicForm.value).subscribe(
        (response: Object) => {
            console.log("Response: ", response);
            this.toastr.success('Form Update Successful', 'Success');
            // Handle the response
        },
        (error: any) => {
            console.error("Error: ", error);
            this.toastr.error('Error Updating form', 'Error');
            // Handle the error
        }
    );
  }

  onCancel(): void {
    console.log("Cancel Form");
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
/*
  NEXT STEPS: 
  1. Create a form for each data type and action combination (owner-add, owner-update, visit-add, visit-update, pet-add, pet-update)

  NOTE:
  The update will pass the id number in the action string (e.g. Update/1, Update/2, Update/3)
  This will be used to get the data from the database and populate the form fields

  VALIDATION:
  Pets cannot be created unless an owner exists
  Visits cannot be created unless a pet exists
*/