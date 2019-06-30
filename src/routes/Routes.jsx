import React from "react";
import { Route, Switch } from "react-router-dom";

// These routes are used by the sitemap generator and need to be kept 
// in sync with the Root component that contains the actually used
// route configuration. 

export default (
  <Switch>
    <Route path="/" exact />
    <Route path="/blog" />
    <Route path="/portfolio" />
    <Route path="/about" />
  </Switch>
);
