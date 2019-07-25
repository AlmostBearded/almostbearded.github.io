// @flow
import React from "react";
import { View } from "react-navi";
import Jumbotron from "react-bootstrap/Jumbotron";

const ProjectLayout = ({
  title,
  tagline
}: {
  title: string,
  tagline: string
}) => (
  <div>
    <Jumbotron>
      <h1 className="display-1">{title}</h1>
      <p className="lead">{tagline}</p>
    </Jumbotron>
    <View />
  </div>
);

export default ProjectLayout;
