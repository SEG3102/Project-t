import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-discharge-patient',
  templateUrl: './discharge-patient.component.html',
  styleUrls: ['./discharge-patient.component.css']
})
export class DischargePatientComponent implements OnInit {
  dischargePatient: FormGroup;
  constructor(private utils: UtilsService) { }

  ngOnInit(): void {
  }

  discharge() {
    this.utils.deleteDoc('PATIENT', '');
  }
}
