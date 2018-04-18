import * as React from "react";

const StaticPageTemplate: React.SFC = (props) => (
  <div>
    <nav>Static Header</nav>
    <main>{props.children}</main>
  </div>
);

export default StaticPageTemplate;
