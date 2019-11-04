import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor(private firestore: AngularFirestore) { }

  getAppVersion(){
    return this.firestore.collection('version').snapshotChanges();
  }
}
