// @flow
import React from "react";
import { route, mount, withView } from "navi";
import ProjectsPage from "../projects/ProjectsPage";
import ProjectLayout from "../projects/ProjectLayout";
import pinRacer from "../projects/pin-racer/project";

export default mount({
  "/": route({
    title: "AlmostBearded's Projects",
    head: (
      <meta
        name="description"
        content="A collection of professional and personal projects I have been involved in."
      />
    ),
    view: <ProjectsPage />
  }),
  "/pin-racer": withView(
    () => (
      <ProjectLayout
        title={pinRacer.title}
        tagline={pinRacer.tagline}
        trailer={pinRacer.trailer}
      />
    ),
    route({
      title: pinRacer.title,
      head: <meta name="description" content={pinRacer.tagline} />,
      getView: pinRacer.getContent
    })
  )
});
