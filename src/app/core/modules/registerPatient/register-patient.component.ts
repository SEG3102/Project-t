import { UtilsService } from './../../../core/services/utils.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css'],
})
export class RegisterPatientComponent implements OnInit {
  registerPatient: FormGroup;
  genders = [
    { value: 'm', viewValue: 'male' },
    { value: 'f', viewValue: 'female' },
    { value: 'h', viewValue: 'I am helicopter' },
  ];
  maritalStatus = [
    { value: 'm', viewValue: 'married' },
    { value: 's', viewValue: 'single' },
    { value: 'i', viewValue: 'It is complicated. I do not want to talk about it' }
  ];
  selectedGender = 'female';
  selectedStatus = 'married';
  constructor(private fb: FormBuilder, private utils: UtilsService) {}

  ngOnInit(): void {
    this.registerPatient = this.fb.group({
      phone: new FormControl('', [Validators.required, Validators.min(7)]),
      name: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      insurance: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      doctor: new FormControl('', Validators.required),
      gender: new FormControl('female'),
      maritalStatus: new FormControl('married'),
      nextOfKeen: new FormControl('', Validators.required),
    });
  }

  submitRegisterPatient() {
    const {
      phone,
      name,
      lastName,
      doctor,
      insurance,
      nextOfKeen,
      dob,
    } = this.registerPatient.value;

    this.utils.setDoc('REGISTER', {
      name: name,
      lastName: lastName,
      insurance: insurance,
      phone: phone,
      familyDoctor: doctor,
      gender: this.selectedGender,
      maritalStatus: this.selectedStatus,
      dataOfBirth: dob,
      nextOfKeen: nextOfKeen,

    });
  }
}
