import { UtilsService } from './../../../core/services/utils.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sighnup',
  templateUrl: './sighnup.component.html',
  styleUrls: ['./sighnup.component.css'],
})
export class SighnupComponent implements OnInit {
  registerForm: FormGroup;
  constructor (
    private fb: FormBuilder,
    private utils: UtilsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.min(6)]),
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    });
  }

  createUser() {
    const { email, password, name, lastName } = this.registerForm.value;
    console.log(email);
    this.utils.createUser(email, password).then(user => {
      // this.utils.setUserDoc("USERS", )
      this.router.navigate[''];
    })
  }
}
