import { observable, action, computed } from "mobx";
import { DocumentSnapshot } from "@firebase/firestore-types";

import RootStore from "../store";
import { db, auth } from "data/firebase";
import User from "data/models/User";
import LoginPage from "components/pages/Auth/Login";

class SessionStore {
  public currentUser: User | undefined;
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @computed
  get isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  @action.bound
  public async login(email: string, pass: string) {
    const user = await auth.signInWithEmailAndPassword(email, pass);
    this.currentUser = new User(user.uid);
  }

  @action.bound
  public async logout() {
    await auth.signOut();

    this.currentUser = undefined;
  }
}

export default SessionStore;
