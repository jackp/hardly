import * as React from "react";

import NavSidebar from "components/organisms/NavSidebar";

const AppPageTemplate: React.SFC = (props) => (
  <div>
    <NavSidebar />
    <main>{props.children}</main>
  </div>
);

export default AppPageTemplate;
