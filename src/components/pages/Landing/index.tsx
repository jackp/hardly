import * as React from "react";
import { Link } from "react-router-dom";

import StaticPage from "components/templates/StaticPage";

const LandingPage: React.SFC = () => (
  <StaticPage>
    <h1>LandingPage</h1>
    <Link to="/login">Login</Link>
  </StaticPage>
);

export default LandingPage;
