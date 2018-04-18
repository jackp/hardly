import * as React from "react";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

import AppStore from "data/store";

interface Props {
  store: AppStore;
}

@inject("store")
@observer
class NavSidebar extends React.Component<Props> {
  public render() {
    const { organizations } = this.props.store;

    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create Org</Link>
          </li>
          <ul>
            {organizations!.orderedList.map((org) => (
              <li key={org.id}>
                <Link to={`/${org.data.name}`}>{org.data.name}</Link>
              </li>
            ))}
          </ul>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavSidebar;
