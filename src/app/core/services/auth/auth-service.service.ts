import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor (
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) { }

  

}
