import { observable, action, computed } from "mobx";

import RootStore from "../store";
import { auth } from "data/firebase";
import User from "data/models/User";
import LoginPage from "components/pages/Auth/Login";

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
