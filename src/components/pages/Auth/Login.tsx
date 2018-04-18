import * as React from "react";
import { inject, observer } from "mobx-react";
import { History } from "history";

import AppState from "data/store";

@inject("store", "history")
@observer
class LoginPage extends React.Component<{ store: AppState; history: History }> {
  private emailRef: React.RefObject<HTMLInputElement>;
  private passRef: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    this.emailRef = React.createRef();
    this.passRef = React.createRef();
  }

  public render() {
    return (
      <div>
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Email" ref={this.emailRef} />
          <input type="password" placeholder="Password" ref={this.passRef} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  protected handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { store, history } = this.props;

    return store.session
      .login(this.emailRef.current!.value, this.passRef.current!.value)
      .then(() => history.push("/"));
  };
}

export default LoginPage;
