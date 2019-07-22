// @flow
import React from "react";
import { route, mount, withView } from "navi";
import PortfolioPage from "../portfolio/PortfolioPage";
import ProjectLayout from "../portfolio/ProjectLayout";
import pinRacer from "../portfolio/pin-racer/project";

export default mount({
  "/": route({
    title: "AlmostBearded's Portfolio",
    head: <meta name="description" content="Peter Oberrauner's Portfolio" />,
    view: <PortfolioPage />
  }),
  "/pin-racer": withView(
    () => <ProjectLayout title={pinRacer.title} tagline={pinRacer.tagline} />,
    route({
      title: pinRacer.title,
      head: <meta name="description" content={pinRacer.tagline} />,
      getView: pinRacer.getContent
    })
  )
});
