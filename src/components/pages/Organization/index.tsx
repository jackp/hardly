import * as React from "react";
import { Route, Switch, RouteComponentProps } from "react-router-dom";

import AppStore from "data/store";
import AppPage from "components/templates/AppPage";
import Create from "./Create";
import View from "./View";

class OrganizationPage extends React.Component<RouteComponentProps<any>> {
  public render() {
    const { match } = this.props;
    return (
      <AppPage>
        <h1>Org Wrapper</h1>
        <Switch>
          <Route path="/create" component={Create} />
          <Route path="/:org" component={View} />
        </Switch>
      </AppPage>
    );
  }
}

export default OrganizationPage;
