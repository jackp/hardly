import { action, computed, observable } from "mobx";
import { DocumentReference } from "@firebase/firestore-types";

import { db } from "data/firebase";

export class User {
  public id: string;
  @observable public data: any;

  private dbRef: DocumentReference;

  constructor(id: string) {
    this.id = id;
    this.dbRef = db.collection("users").doc(id);
  }

  @action
  public async load() {
    const userSnapshot = await this.dbRef.get();

    this.data = userSnapshot.data();
  }
}

export default User;
