import {
  Injectable,
  ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR,
} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { firestore } from 'firebase/app';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  configData;
  private userRoleSource = new Subject<string>();
  userRole$ = this.userRoleSource.asObservable();

  constructor(
    public afAuth: AngularFireAuth,
    private _afs: AngularFirestore,
    private _storage: AngularFireStorage
  ) { }
  
  ngOnInit(): void {
    this.afAuth.authState.subscribe(authState => {
     
   }) 
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
    if (coll == 'ROLES') {
      _coll = 'User_roles';
    }
    return _coll;
  }

  setUserDoc(coll, docId, data) {
    const timestamp = this.timestamp;
    var docRef = this._afs.collection(this.getCollUrls(coll)).doc(docId);
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

  setDoc(coll: string, data: any, authorID: any) {
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
        author: authorID,
        updatedAt: timestamp,
        createdAt: timestamp,
      })
      .then((res) => {
        return id;
      });
  }
}
