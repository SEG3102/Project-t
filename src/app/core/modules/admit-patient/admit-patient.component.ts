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
  selector: 'app-admit-patient',
  templateUrl: './admit-patient.component.html',
  styleUrls: ['./admit-patient.component.css'],
})
export class AdmitPatientComponent implements OnInit {
  registerPatient: FormGroup;
  departments = [
    { value: 'd1', viewValue: 'Department 1' },
    { value: 'd2', viewValue: 'Department 2' },
    { value: 'd3', viewValue: 'Department 3' },
  ];
  selectedDepartment = 'Department 1';

  updateRoleForm: FormGroup;
  patients;
  columnsToDisplay = ['name', 'lastName'];
  expandedElement;

  constructor(private fb: FormBuilder, private utils: UtilsService) {}

  ngOnInit(): void {
    this.registerPatient = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.min(7)]),
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      doctor: new FormControl('', Validators.required),
      department: new FormControl('Department 1'),
      note: new FormControl('Patients Notes'),
    });
    this.updateRoleForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
    this.utils.registeredPatients$.subscribe((data) => {
      this.patients = data;
    });
  }

  admitPatient() {
    // const {
    //   email,
    //   phone,
    //   name,
    //   lastName,
    //   doctor,
    //   note,
    // } = this.registerPatient.value;

    // this.utils.setDoc('ADMISSION', {
    //   name: name,
    //   lastName: lastName,
    //   email: email,
    //   phone: phone,
    //   familyDoctor: doctor,
    //   department: this.selectedDepartment,
    //   note: note,
    // });
    console.log(this.patients)
  }
}
