import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @ViewChild('contactForm') contactForm : NgForm;
  public email: string;
  public message: string;
  public clientValidation = false;
  public submitted: boolean = false;
  public errors = {
    email: null,
    message: null
  }

  constructor(
    private contactService: ContactService
  ) {
    this.clearErrors();
  }

  ngOnInit() {
  }

  clearErrors() {
    this.errors.email = null;
    this.errors.message = null;
  }

  isErrorVisible(clientRef, validator, field, code) {
    let clientError = this.clientValidation && clientRef.touched && clientRef.errors && clientRef.errors[validator];
    let serverError = this.errors[field] && this.errors[field].code === code;
    return clientError || serverError;      
  }

  onSubmit() {
    // Check if we're using client side validation
    if (this.clientValidation && !this.contactForm.valid) return;

    this.clearErrors();
    // Send contact data to service
    this.contactService.send({
      email: this.email,
      message: this.message
    }).subscribe(() => {
      // Everything OK, show thank you message
      this.submitted = true;
    }, (response: any) => {
      // Process service error
      this.submitted = false;
      if (response.error && response.error.errors) {
        response.error.errors.forEach((error) => {
          if (error.field === 'email') {
            this.errors.email = error;
          } else if (error.field === 'message') {
            this.errors.message = error;
          }
        });
      }
    });
  }

}
