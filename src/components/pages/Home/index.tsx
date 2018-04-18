import * as React from "react";
import { observer, inject } from "mobx-react";

import AppState from "data/store";
import DashboardPage from "./Dashboard";
import LandingPage from "./Landing";

const HomePage: React.SFC<{ store: AppState }> = (props) => {
  return props.store.session && props.store.session.isAuthenticated ? (
    <DashboardPage />
  ) : (
    <LandingPage />
  );
};

export default inject("store")(observer(HomePage));
