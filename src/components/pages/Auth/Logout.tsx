import * as React from "react";
import { inject } from "mobx-react";
import { Redirect } from "react-router";

import AppState from "data/store";

interface IProps {
  store: AppState;
}

interface IState {
  complete: boolean;
}

@inject("store")
class LogoutPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      complete: false,
    };
  }
  public componentWillMount() {
    const { store } = this.props;
    store.session.logout().then(() => {
      this.setState({ complete: true });
    });
  }

  public render() {
    return this.state.complete ? <Redirect to="/" /> : null;
  }
}

export default LogoutPage;
