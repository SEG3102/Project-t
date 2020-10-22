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
    private auth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.min(6)]),
    });
  }

  createUser() {
    const { email, password } = this.registerForm.value;
    console.log(email);
    this.auth.createUserWithEmailAndPassword(email, password).then(user => {
      this.router.navigate['']
    })
  }
}
