import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { User, Patient } from '../../auth/user.model';

@Injectable({
  providedIn: 'root',
})
export class GetAllCollectonsService {
  constructor(private _afs: AngularFirestore) {}

  ngOnInit(): void {}

  getAllCollectionsItems(collection) {
    return this._afs
      .collection(collection)
      .snapshotChanges()
      .pipe(
        map((snaps) => {
          return snaps.map((snap) => {
            switch (collection) {
              case 'Users_settings': {
                console.log("another hello")
                return <User>snap.payload.doc.data();
              }
              case "Patient_admission": {
                console.log("hello")
                return <Patient>snap.payload.doc.data();
              }
              case "Patient_registration": {
                console.log("hello")
                return <Patient>snap.payload.doc.data();
              }
              default: {
                console.log("smth wrong")
              }
            }
          });
        })
      );
  }
}
