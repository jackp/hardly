import { action, observable } from "mobx";

import OrganizationStore from "./OrganizationStore";
import SessionStore from "./SessionStore";
import UserStore from "./UserStore";

import User from "data/models/User";
import { auth } from "data/firebase";

class AppStore {
  @observable public session: SessionStore;
  @observable public users?: UserStore;
  @observable public organizations?: OrganizationStore;

  constructor() {
    this.session = new SessionStore(this);
  }

  @action
  public async loadInitialData() {
    if (auth.currentUser) {
      // Load current user
      this.session.currentUser = new User(auth.currentUser.uid);
      await this.session.currentUser.load();

      // Initialze UserStore
      this.users = new UserStore(this);
      this.users.add(this.session.currentUser);

      // Initialize OrganizationStore
      this.organizations = new OrganizationStore(this);
      return await this.organizations.load();
    }
  }
}

export default AppStore;
