import { AngularFireAuth } from '@angular/fire/auth';
import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from './../../../core/services/utils.service';
import { AuthService } from './../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() pageTitle: string;
  authState: any = null;
  userSettings;
  loggedIn;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private auth: AuthService,
    private utils: UtilsService
    ) { }

  ngOnInit(): void {
      this.afAuth.authState.subscribe(authState => {
      this.authState = authState;
    })
    this.auth.userSettings$.subscribe(data => {
      this.userSettings = data;
    })
  }

  logOut() {
    this.userSettings.name = null;
    this.utils.logOut().then(() => this.router.navigate(['login']));
  }

  home() {
    this.router.navigate([''])
  }
}
