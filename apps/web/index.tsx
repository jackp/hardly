import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";

import { auth } from "data/firebase";
import RootStore from "data/store";

import App from "App";

// Check authentication status before loading App
const unsubscribe = auth.onAuthStateChanged(() => {
  ReactDOM.render(
    <Provider store={new RootStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("app"),
  );

  unsubscribe();
});
