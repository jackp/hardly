import { observable, computed } from "mobx";

import { RootStore } from "../store";
import { auth } from "data/firebase";
import User from "data/models/User";

class SessionStore {
  public currentUser: User | undefined;
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    if (auth.currentUser) {
      this.currentUser = new User(auth.currentUser.uid);
      this.rootStore.users.add(this.currentUser);
    }
  }

  @computed
  get isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  @computed
  get isInitialized(): boolean {
    if (this.currentUser) {
      return this.currentUser.loaded;
    } else {
      return true;
    }
  }
}

export default SessionStore;
