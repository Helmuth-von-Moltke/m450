import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { supplyHubs, genders } from '../../dataStorage/registrationData';
import { restrictFuck, restrictCustomList } from '../validators/restricted-words.validator';
import { PhoneType } from '../types/phoneNumberType';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }

  userDataForm!: FormGroup;

  supplyHubs = supplyHubs;
  genders = genders;

  ngOnInit(): void {
    this.userDataForm = this.formBuilder.group({
      id: new FormControl(),
      name: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.maxLength(20)]],
      age: ['', [Validators.required, Validators.max(130), Validators.min(16)]],
      email: ['', [Validators.required, Validators.email]],
      dateOfAdulthood: [new Date, [Validators.required]],
      comfort:['', [Validators.required]],
      sex: ['', [Validators.required]],
      supplyHub: ['glasgow', [Validators.required]],
      catchPhrase: ['', [restrictFuck, restrictCustomList(['blyat', 'cyka'])]],
      phoneNumbers: this.formBuilder.array([this.createPhoneGroup()])
    });
    this.userDataForm.get('name')?.valueChanges.subscribe(value => {
      console.log(value)
    })
    console.log(this.userDataForm)
  }

  stringifyCompare(a: any, b: any): boolean {
    return JSON.stringify(a) === JSON.stringify(b)
  }

  createPhoneGroup(): FormGroup {
    const phoneGroup = this.formBuilder.group({
      value: ['', [Validators.required]],
      type: [PhoneType, [Validators.required]],
      preferred: [false]
    })

    phoneGroup.controls.preferred.valueChanges.pipe(distinctUntilChanged(this.stringifyCompare)).subscribe(value => {
      if (value) {
        phoneGroup.controls.preferred.addValidators([Validators.required])
      } else {
        phoneGroup.controls.preferred.removeValidators([Validators.required])
        phoneGroup.controls.preferred.updateValueAndValidity()
      }
    })

    return phoneGroup
  }

  addPhoneNumber(): void {
    (<FormArray>this.userDataForm.get('phoneNumbers')).push(this.createPhoneGroup())
  }

  submitRegistration() {
    console.log(this.userDataForm);
  }
}
