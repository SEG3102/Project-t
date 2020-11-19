import { UtilsService } from './core/services/utils.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-t';
  header: string
  constructor ( private utils: UtilsService) {
    
  }
  OnInit() {
    this.utils.header$.subscribe(data => {
      this.header = data
    })
  }
}
