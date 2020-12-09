import { UtilsService } from './../../../core/services/utils.service';
import { Router } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
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
  checked = false;

  admitPatient: FormGroup;
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
    this.admitPatient = this.fb.group({
      patient: new FormControl('Department 1'),
      localDoctor: new FormControl('', Validators.required),
      room: new FormControl('', Validators.required),
      bed: new FormControl('', Validators.required),
      PIN: new FormControl('PIN'),
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

  admitPatientToDepartment() {
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

    console.log(this.patients);
  }

  cancel() {

  }
}
