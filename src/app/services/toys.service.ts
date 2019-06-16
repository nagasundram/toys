import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Toy } from "src/app/toy.model";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import "rxjs/add/operator/toPromise";
@Injectable({
  providedIn: "root"
})
export class ToysService {
  constructor(private firestore: AngularFirestore) {}
  index() {
    return this.firestore
      .collection("toys", ref => ref.orderBy("name", "desc"))
      .snapshotChanges();
  }
  show(id: string) {
    return new Observable(observer => {
      this.firestore
        .collection("toys")
        .doc(id)
        .ref.get()
        .then(doc => {
          let data = doc.data();
          observer.next({
            key: doc.id,
            ...data
          });
        });
    });
  }
  createToy(toy: Toy) {
    return new Observable(observer => {
      this.firestore
        .collection("toys")
        .add(toy)
        .then(doc => {
          observer.next({
            key: doc.id
          });
        });
    });
  }
  updateToy(toy: any, id: string) {
    return new Observable(observer => {
      this.firestore
        .collection("toys")
        .doc(id)
        .set(toy)
        .then(doc => {
          observer.next();
        });
    });
  }
  deleteToy(id: string) {
    return new Observable(observer => {
      this.firestore
        .collection("toys")
        .doc(id)
        .delete()
        .then(doc => {
          observer.next();
        });
    });
  }
}
