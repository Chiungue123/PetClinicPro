import { Component } from '@angular/core';
import { Owner } from '../models/owner';
import { Visit } from '../models/visit';
import { Pet } from '../models/pet';

import { API_CONSTANTS } from '../shared/api-constants';
import { environment } from '../../environments/environment.prod';
import { InputTypes } from '../shared/input-types';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';
import { PetService } from '../services/pet.service';
import { OwnerService } from '../services/owner.service';
import { VisitService } from '../services/visit.service';

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

  private apiUrl = environment.apiUrl;

  dynamicForm!: FormGroup;
  sub!: Subscription;

  label!: string[];
  inputTypes!: { [key: string]: string };

  owner!: Owner;
  visit!: Visit;
  pet!: Pet;

  owners!: Owner[];
  pets!: Pet[];
  visits!: Visit[];

  formControls: string[] = [];

  formTitle!: string;
  action!: string;
  dataType!: string;

  constructor(private router: Router,
              private petService: PetService,
              private ownerService: OwnerService,
              private visitService: VisitService,
              private fb: FormBuilder, 
              private http: HttpClient,
              private toastr: ToastrService,
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
        this.label = ["Date of Visit", "Reason of Visit", "Treatment Notes", "PetID"];
        this.inputTypes = new InputTypes().visitTypes;

      } else if (this.dataType === "pets") {
        this.label = ["Name", "Breed", "Age", "Owner ID"];
        this.inputTypes = new InputTypes().petTypes;
      }
    }
  }

  ngOnInit(): FormGroup { 
    this.fetchOwners();
    this.fetchPets();
    return this.initializeForm();
  }

  fetchPets() {
    this.petService.getPets().subscribe({
      next: (pets: Pet[]) => this.pets = pets,
      error: (err: any) => console.error(err) 
    });
  }

  fetchOwners() {
    this.ownerService.getOwners().subscribe({
      next: (owners: Owner[]) => this.owners = owners,
      error: (err: any) => console.error(err)
    });
  }

  initializeForm(): FormGroup {
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

  createForm(dataType: string): FormGroup {
    if (dataType === "owners") {
      this.formTitle = "Add Owner"
      this.dynamicForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required]
      });

    } else if (dataType === "visits") {
      this.formTitle = "Add Visit"
      this.dynamicForm = this.fb.group({
        //visitID: ['', Validators.required],
        dateOfVisit: ['', Validators.required],
        reasonOfVisit: ['', Validators.required],
        treatmentNotes: ['', Validators.required],
        petID: ['', Validators.required]
      });

    } else if (dataType === "pets") {
      this.formTitle = "Add Pet"
      this.dynamicForm = this.fb.group({
        //petID: ['', Validators.required],
        name: ['', Validators.required],
        breed: ['', Validators.required],
        age: ['', Validators.required],
        ownerID: ['', Validators.required]
      });
    } else {  
      console.log("Invalid Data Type");
    }

    return this.dynamicForm;
  }

  updateForm(dataType: string, id: Number): FormGroup {

    console.log("Update Form Datatype: " + dataType + " ID: " + id)

    if (dataType === 'owners') {

      this.formTitle = "Update Owner"
      this.dynamicForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required]
      });
      
      this.ownerService.getOwner(id).subscribe(
        (owner: Owner) => {
          console.log("Owner: ", owner)

          this.dynamicForm.patchValue({
            firstName: owner.firstName,
            lastName: owner.lastName,
            email: owner.email,
            phone: owner.phone
          });
        },(error: any) => {
          console.error("Error: ", error);
        });

    } else if (dataType === 'visits') {

      this.formTitle = "Update Visit"
      this.dynamicForm = this.fb.group({
        //visitID: ['', Validators.required],
        dateOfVisit: ['', Validators.required],
        reasonOfVisit: ['', Validators.required],
        treatmentNotes: ['', Validators.required],
        petID: ['', Validators.required]
      });

      this.visitService.getVisit(id).subscribe(
        (visit: Visit) => {
          console.log("Visit: ", visit)
          this.visit = visit;
          this.dynamicForm.patchValue({
            //visitID: this.visit.visitID,
            petID: this.visit.petID,
            dateOfVisit: visit.dateOfVisit,
            reasonOfVisit: visit.reasonOfVisit,
            treatmentNotes: visit.treatmentNotes
          });
        },(error: any) => {
          console.error("Error: ", error);
        });

    } else if (dataType === 'pets') {

      this.formTitle = "Update Pet"
      this.dynamicForm = this.fb.group({
        //petID: ['', Validators.required],
        name: ['', Validators.required],
        breed: ['', Validators.required],
        age: ['', Validators.required],
        ownerID: ['', Validators.required]
      });

      this.petService.getPet(id).subscribe(
        (pet: Pet) => {
          console.log("Pet: ", pet);
          this.dynamicForm.patchValue({
            //petID: pet.petID,
            name: pet.name,
            breed: pet.breed,
            age: pet.age,
            ownerID: pet.ownerID
          });
        },(error: any) => {
          console.error("Error: ", error);
        });
      } 

      return this.dynamicForm;
  }

  onSubmit(): void {
    if (this.action.includes("Add")) {
      this.add(this.dataType);
      this.router.navigate(['/' + this.dataType.toLowerCase() ]);

    } else if (this.action.includes("Update")) {
      let id = parseInt(this.action.split("/")[1]);
      this.update(this.dataType, id);
      this.router.navigate(['/' + this.dataType.toLowerCase() ]);

    } else { 
      console.log("Invalid Action");
    }
  }

  add(dataType: string) {
    // Determine the correct endpoint based on the dataType
    let endpoint = '';
    switch(dataType) {
        case 'owners':
            endpoint = environment.endpoints.owners;
            break;
        case 'pets':
            endpoint = environment.endpoints.pets;
            break;
        case 'visits':
            endpoint = environment.endpoints.visits;
            break;
        default:
            console.error('Invalid data type');
            return;
    }

    // Construct the full URL using the base URL and the determined endpoint
    const url = environment.apiUrl + "/" + endpoint + '/add';

    console.log("API URL: ", environment.apiUrl);
    console.log("Endpoint: ", endpoint);
    console.log("=====================================")
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

  update(dataType: string, id: Number) {
    // Determine the correct endpoint based on the dataType
    let endpoint = '';
    switch(dataType) {
        case 'owners':
            endpoint = environment.endpoints.owners;
            break;
        case 'pets':
            endpoint = environment.endpoints.pets;
            break;
        case 'visits':
            endpoint = environment.endpoints.visits;
            break;
        default:
            console.error('Invalid data type');
            return;
    }

    const url = environment.apiUrl + "/" + endpoint + '/update/' + id;
    
    console.log("API URL: ", environment.apiUrl);
    console.log("Endpoint: ", endpoint);
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
    this.router.navigate(['/' + this.dataType.toLowerCase() ]);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}