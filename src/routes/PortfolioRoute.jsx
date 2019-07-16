import React from "react";
import { route } from "navi";
import PortfolioPage from "../portfolio/PortfolioPage";

export default route(async request => {
  return {
    title: "AlmostBearded's Portfolio",
    head: <meta name="description" content="Peter Oberrauner's Portfolio" />,
    view: <PortfolioPage />
  };
});
