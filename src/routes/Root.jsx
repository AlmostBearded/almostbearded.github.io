import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Home from "./Home";
import Blog from "./Blog";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import About from "./About";
import NotFound from "./NotFound";

const Root = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/blog" component={Blog} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Root;
