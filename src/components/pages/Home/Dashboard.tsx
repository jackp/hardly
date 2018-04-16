import * as React from "react";
import { Link } from "react-router-dom";

const DashboardPage: React.SFC = () => (
  <div>
    <h1>DashboardPage</h1>
    <Link to="/logout">Logout</Link>
  </div>
);

export default DashboardPage;
