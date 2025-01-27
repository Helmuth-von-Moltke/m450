import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { FeedbackServiceService } from '../services/feedback-service.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private feedbackService: FeedbackServiceService) {}
  
  contactData = {
    name: '',
    email: '',
    age: 0,
    phoneNumber: '',
    message: ''
  };

  submitForm(form: NgForm) {
    console.log(form.value)
    if (form.valid) {
      console.log("form submitted", this.contactData);
      form.resetForm();
    }
  }
}
