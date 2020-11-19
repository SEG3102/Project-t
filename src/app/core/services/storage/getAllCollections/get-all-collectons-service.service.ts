import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { User } from '../../auth/user.model';

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
            return <User>snap.payload.doc.data();
          });
        })
      );
  }
}
