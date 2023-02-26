import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/compat/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface User{
  ucid: string;
  name: string;
  contact: string;
  email: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  collectionName = 'users';

  private users: Observable<User[]>;
  private userCollection: AngularFirestoreCollection<User>;

  constructor(private firestore: AngularFirestore) {
  }

  /*getUsers(): Observable<User[]> {
    return this.users;
  }

  getUser(ucid: string): Observable<User> {
    return this.userCollection.doc<User>(ucid).valueChanges().pipe(
      take(1),
      map(user => {
        user.ucid = ucid;
        return user;
      })
    );
  }

  addUser(user: User): Promise<DocumentReference> {
    return this.userCollection.add(user);
  }

  updateUser(user: User): Promise<void> {
    return this.userCollection.doc(user.ucid).update(
      {
        fullName: user.fullName,
        ucid: user.ucid,
        branch: user.branch,
        year: user.year
      }
    );
  }

  deleteUser(ucid: string): Promise<void> {
    return this.userCollection.doc(ucid).delete();
  }*/

  addUser(user: User) {
    return this.firestore.collection(this.collectionName).add(user);
  }

  getUsers() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  updateUser(ucid, user) {
    this.firestore.doc(this.collectionName + '/' + ucid).update(user);
  }

  deleteUser(ucid) {
    this.firestore.doc(this.collectionName + '/' + ucid).delete();
  }
}
