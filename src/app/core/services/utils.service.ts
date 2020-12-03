import { GetAllCollectonsService } from './storage/getAllCollections/get-all-collectons-service.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
} from '@angular/fire/firestore';
import { Subject, Observable } from 'rxjs';
import { User } from './auth/user.model';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  configData;
  private userRoleSource = new Subject<string>();
  userRole$ = this.userRoleSource.asObservable();
  header = new Subject<string>();
  header$ = this.userRoleSource.asObservable();
  users$: Observable<Object[]>;
  admitedPatients$: Observable<Object[]>;
  registeredPatients$: Observable<Object[]>;


  constructor (public afAuth: AngularFireAuth, private _afs: AngularFirestore, private getCollection: GetAllCollectonsService) {
    this.users$ = this.getCollection.getAllCollectionsItems(this.getCollUrls("USERS"));
    this.admitedPatients$ = this.getCollection.getAllCollectionsItems(this.getCollUrls("ADMISSION"));
    this.registeredPatients$ = this.getCollection.getAllCollectionsItems(this.getCollUrls("REGISTER"));
  }

  ngOnInit(): void {
  }

  getAuthState() {
    return this.afAuth.authState;
  }

  loginEmail(email, pwd) {
    return this.afAuth.signInWithEmailAndPassword(email, pwd);
  }

  createUser(email, pwd) {
    return this.afAuth.createUserWithEmailAndPassword(email, pwd);
  }

  logOut() {
    return this.afAuth.signOut();
  }

  get timestamp() {
    const d = new Date();
    return d;
  }

  getCollUrls(coll) {
    let _coll = 'Users_settings';
    if (coll == 'USERS') {
      _coll = 'Users_settings';
    }
    if (coll == 'REGISTER') {
      _coll = 'Patient_registration';
    }
    if (coll == 'ADMISSION') {
      _coll = 'Patient_admission';
    }
    return _coll;
  }

  setUserDoc(coll, docId, data) {
    const timestamp = this.timestamp;
    const docRef = this._afs.collection(this.getCollUrls(coll)).doc(docId);
    return docRef
      .set({
        ...data,
        author: docId,
        updatedAt: timestamp,
        createdAt: timestamp,
      })
      .then((res) => {
        return true;
      });
  }

  setDoc(coll: string, data: any) {
    let docId;
    const id = this._afs.createId();
    const item = { id, name };
    if (docId) {
      item.id = docId;
    }
    const timestamp = this.timestamp;
    var docRef = this._afs.collection(this.getCollUrls(coll)).doc(item.id);
    return docRef
      .set({
        ...data,
        _id: id,
        updatedAt: timestamp,
        createdAt: timestamp,
      })
      .then((res) => {
        return id;
      });
  }
  updateDoc(coll, docId, data) {
    const timestamp = this.timestamp;
    var docRef = this._afs.collection(this.getCollUrls(coll)).doc(docId);
    return docRef
      .update({
        ...data,
        updatedAt: timestamp,
      })
      .then((res) => {
        return true;
      });
  }

  getDoc(coll: string, docId: string) {
    return this._afs
      .collection(this.getCollUrls(coll))
      .doc(docId)
      .valueChanges();
  }

  deleteDoc(coll: string, docId: string) {
    var docRef = this._afs.collection(this.getCollUrls(coll)).doc(docId);
    return docRef.delete().then((res) => {
      return true;
    });
  }
}
