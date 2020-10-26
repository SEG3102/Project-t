import { UtilsService } from './../../services/utils.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor (
    private utils: UtilsService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  logOut() {
    this.utils.logOut().then(() => this.router.navigate(['login']));
  }
}
