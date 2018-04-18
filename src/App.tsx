import * as React from "react";
import { Redirect, Route, Switch, withRouter, Router } from "react-router";
import { observer, Provider } from "mobx-react";
import { History } from "history";

import AppState from "data/store";

import DashboardPage from "components/pages/Dashboard";
import LandingPage from "components/pages/Landing";
import LoginPage from "components/pages/Auth/Login";
import LogoutPage from "components/pages/Auth/Logout";
import OrganizationPage from "components/pages/Organization";

import AppPage from "components/templates/AppPage";
import StaticPage from "components/templates/StaticPage";

interface Props {
  store: AppState;
  history: History;
}

interface State {
  initialized: boolean;
}

@observer
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      initialized: false,
    };

    props.store
      .loadInitialData()
      .then(() => this.setState({ initialized: true }));
  }

  public render() {
    const { store, history } = this.props;

    return this.state.initialized ? (
      <Router history={history}>
        <Provider store={store} history={history}>
          <div id="app">
            <Switch>
              <Route exact path="/" render={this.indexRouteComponent} />
              <Route path="/login" component={LoginPage} />
              <Route path="/logout" component={LogoutPage} />
              <Route path="*" component={OrganizationPage} />
            </Switch>
          </div>
        </Provider>
      </Router>
    ) : (
      <div>Loading...</div>
    );
  }

  private indexRouteComponent = () => {
    const { currentUser } = this.props.store.session;

    return currentUser ? <DashboardPage /> : <LandingPage />;
  };
}

export default App;
