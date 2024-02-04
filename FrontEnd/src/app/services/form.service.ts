import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient,
              private toastr: ToastrService) { }

  /*onUpdate(url: string, formValue: AbstractControl<Object>): void {
    this.http.put<Object>(url, formValue).subscribe(
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
  }*/

  onUpdate(url: string, formValue: AbstractControl<Object>): void {
    this.http.put<Object>(url, formValue).subscribe(
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

}