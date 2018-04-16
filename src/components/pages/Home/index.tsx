import * as React from "react";
import { observer, inject } from "mobx-react";

import DashboardPage from "./Dashboard";
import LandingPage from "./Landing";

import { SessionStore } from "data/store";

export interface IProps {
  session?: SessionStore;
}

const HomePage: React.SFC<IProps> = (props) => {
  return props.session && props.session.isAuthenticated ? (
    <DashboardPage />
  ) : (
    <LandingPage />
  );
};

export default inject(({ store }) => ({ session: store.session }))(HomePage);
