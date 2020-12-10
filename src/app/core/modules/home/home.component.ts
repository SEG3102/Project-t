import { UtilsService } from './../../services/utils.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  userSettings;

  constructor (
    private utils: UtilsService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.userSettings$.subscribe(data => {
      this.userSettings = data;
    })
  }



  register() {
    this.router.navigate(['registerPatient'])
  }

  admit() {
    if(this.userSettings.roles['nurse']) {
      this.router.navigate(['admitPatient'])
    }
  }

  monitor() {
    if(this.userSettings.roles['nurse']) {
      this.router.navigate(['divisionInfo'])
    } else {
      alert("You do not have the priveleges to access this.")
    }
  }
}
