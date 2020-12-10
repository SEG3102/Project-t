import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from './../../../core/services/utils.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  updatePatient: FormGroup;
  depts = [
    { value: 'd1', viewValue: 'Department 1' },
    { value: 'd2', viewValue: 'Department 2' },
    { value: 'd3', viewValue: 'Department 3' }
  ];
  selDept = "Department 1";

  constructor(private fbuild: FormBuilder, private utils: UtilsService) { }

  ngOnInit(): void {
    this.updatePatient = this.fbuild.group({
      email: new FormControl('',
        [Validators.required, Validators.email]),
      phone: new FormControl('',
        [Validators.required, Validators.min(7)]),
      name: new FormControl('',
        Validators.required),
      lastName: new FormControl('',
        Validators.required),
      doctor: new FormControl('',
        Validators.required),
      department: new FormControl('Department 1'),
      note: new FormControl('Patients Notes')
    });
  }

  updatePatientData() {
    const { email,
      phone,
      name,
      lastName,
      doctor,
      note } = this.updatePatient.value;

    this.utils.updateDoc('PATIENT', '', {
      name: name,
      lastName: lastName,
      email: email,
      phone: phone,
      familyDoctor: doctor,
      department: this.selDept,
      note: note
    });
  }
}