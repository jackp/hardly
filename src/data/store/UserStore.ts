import { observable, action } from "mobx";

import { RootStore } from "../store";
import User from "data/models/User";

class UserStore {
  private rootStore: RootStore;

  private users = observable.map({});

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  public add(user: User) {
    this.users.set(user.id, user);
  }
}

export default UserStore;
