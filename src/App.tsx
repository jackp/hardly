import * as React from "react";
import { Redirect, Route, Switch, withRouter, Router } from "react-router";
import { observer, Provider } from "mobx-react";
import { History } from "history";

import AppState from "data/store";

import HomePage from "components/pages/Home";
import LoginPage from "components/pages/Auth/Login";
import LogoutPage from "components/pages/Auth/Logout";
import OrganizationPage from "components/pages/Organization";

interface IProps {
  store: AppState;
  history: History;
}

@observer
class App extends React.Component<IProps> {
  public render() {
    const { store, history } = this.props;

    return store.session.isInitialized ? (
      <Router history={history}>
        <Provider store={store} history={history}>
          <div id="app">
            <header>App Header</header>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/logout" component={LogoutPage} />
            </Switch>
          </div>
        </Provider>
      </Router>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default App;
