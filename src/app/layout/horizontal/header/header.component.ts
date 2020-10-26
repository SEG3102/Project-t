import { AngularFireAuth } from '@angular/fire/auth';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() pageTitle: string;
  authState: any = null;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
      this.afAuth.authState.subscribe(authState => {
      this.authState = authState;
    })
  }
}
