import { action, computed, observable } from "mobx";
import { DocumentReference, DocumentSnapshot } from "@firebase/firestore-types";

import { db } from "data/firebase";

export class User {
  public id: string;
  @observable public loaded: boolean = false;
  @observable public data: any;

  private dbRef: DocumentReference;

  constructor(id: string) {
    this.id = id;
    this.dbRef = db.collection("users").doc(id);

    this.load();
  }

  @action
  public async load() {
    const userSnapshot: DocumentSnapshot = await this.dbRef.get();

    this.data = userSnapshot.data();
    this.loaded = true;
  }
}

export default User;
