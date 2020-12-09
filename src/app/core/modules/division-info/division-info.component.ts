import { Component, OnInit } from '@angular/core';
import { UtilsService } from './../../../core/services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-division-info',
  templateUrl: './division-info.component.html',
  styleUrls: ['./division-info.component.css']
})
export class DivisionInfoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  divisionInfo() {

  }

  cancel() {
  this.router.navigate([''])
  }

}
