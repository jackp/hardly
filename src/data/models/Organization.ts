import { action, computed, observable } from "mobx";
import { DocumentReference } from "@firebase/firestore-types";

import { db } from "data/firebase";

export interface OrganizationData {
  name: string;
}

export class Organization {
  public id: string;
  @observable public data: Partial<OrganizationData>;

  private dbRef: DocumentReference;

  constructor(id: string, data?: Partial<OrganizationData>) {
    this.id = id;
    this.data = data || {};
    this.dbRef = db.collection("organizations").doc(id);
  }
}

export default Organization;
