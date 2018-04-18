import { observable, action, computed, set } from "mobx";
import { CollectionReference, QuerySnapshot } from "@firebase/firestore-types";

import { db, auth } from "data/firebase";
import RootStore from "../store";

import Organization, { OrganizationData } from "data/models/Organization";
import User from "data/models/User";

interface OrganizationMap {
  [name: string]: Organization;
}

class OrganizationStore {
  @observable public organizations: OrganizationMap = {};

  private rootStore: RootStore;
  private collectionRef: CollectionReference;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.collectionRef = db.collection("organizations");
  }

  @computed
  get orderedList() {
    return Object.keys(this.organizations).map(
      (org) => this.organizations[org],
    );
  }

  @action
  public add(org: Organization) {
    set(this.organizations, { [org.data.name]: org });
  }

  @action
  public async load() {
    const query = await this.collectionRef
      .where("owner", "==", auth.currentUser!.uid)
      .get();

    query.forEach((doc) => {
      this.add(new Organization(doc.id, doc.data()));
    });
  }
}

export default OrganizationStore;
