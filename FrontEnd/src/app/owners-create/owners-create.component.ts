import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { OwnerService } from '../services/owner.service';
import { Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-owners-create',
  standalone: true,
  imports: [
    CommonModule,
    ToastrModule,
    BrowserAnimationsModule
  ],
  templateUrl: './owners-create.component.html',
  styleUrl: './owners-create.component.css'
})
export class OwnersCreateComponent {

  ownerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.required]
  });

  constructor(
    //private toastr: ToastrService,
    private ownerService: OwnerService, 
    private fb: FormBuilder, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    // Remove spaces from the first and last name and concatinate into the name variable
    console.log("Create Owner");
  }

  onCancel(): void {
    console.log("Cancel Owner");
  }

}