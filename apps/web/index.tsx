import * as React from "react";
import * as ReactDOM from "react-dom";

import { auth } from "data/firebase";

import App from "App";

// Check authentication status before loading App
const unsubscribe = auth.onAuthStateChanged(() => {
  ReactDOM.render(<App />, document.getElementById("app"));

  unsubscribe();
});
