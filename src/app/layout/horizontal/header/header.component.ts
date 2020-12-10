import { AngularFireAuth } from '@angular/fire/auth';
import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from './../../../core/services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() pageTitle: string;
  authState: any = null;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private utils: UtilsService
    ) { }

  ngOnInit(): void {
      this.afAuth.authState.subscribe(authState => {
      this.authState = authState;
    })
  }

  logOut() {
    this.utils.logOut().then(() => this.router.navigate(['login']));
  }

  home() {
    this.router.navigate([''])
  }
}
