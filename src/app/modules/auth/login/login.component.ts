import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private auth: AngularFireAuth,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.min(6)]),
    });
  }
  onLogin() {
    const { email, password } = this.loginForm.value;
    console.log(email)
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['']);
    console.log("nav")  });
  }
}
