import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router";

import store from "data/store";

const PrivateRoute: React.SFC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { isAuthenticated } = store.session;

  const renderRoute = (props: any) => {
    return isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    );
  };

  return <Route {...rest} render={renderRoute} />;
};

export default PrivateRoute;
