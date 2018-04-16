import * as React from "react";
import { Route, Switch } from "react-router";
import { observer, inject } from "mobx-react";

import { SessionStore } from "data/store";

// import PrivateRoute from "containers/PrivateRoute";
import HomePage from "components/pages/Home";
import LoginPage from "components/pages/Auth/Login";
import LogoutPage from "components/pages/Auth/Logout";
import OrganizationPage from "components/pages/Organization";

export interface IProps {
  session?: SessionStore;
}

@inject(({ store }) => ({
  session: store.session,
}))
@observer
class App extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { session } = this.props;

    return session!.isInitialized ? (
      <div id="app">
        <header>Main Header</header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/logout" render={LogoutPage} />
        </Switch>
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default App;
