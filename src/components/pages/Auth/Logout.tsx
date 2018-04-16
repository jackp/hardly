import * as React from "react";
import { Redirect } from "react-router";

import { auth } from "data/firebase";

const Logout = async () => {
  await auth.signOut();

  return <Redirect to="/" />;
};

export default Logout;
