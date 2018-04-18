import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { auth } from "data/firebase";
import App from "App";
import AppState from "data/store";

// Check authentication status before loading App
const unsubscribe = auth.onAuthStateChanged(() => {
  ReactDOM.render(
    <App store={new AppState()} history={createBrowserHistory()} />,
    document.getElementById("app"),
  );

  unsubscribe();
});
