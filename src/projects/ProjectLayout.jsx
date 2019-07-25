// @flow
import React from "react";
import { View } from "react-navi";
import Jumbotron from "react-bootstrap/Jumbotron";
import AspectContainer from "../common/AspectContainer";
import Video from "../common/Video";

const ProjectLayout = ({
  title,
  tagline,
  trailer
}: {
  title: string,
  tagline: string,
  trailer: string
}) => (
  <div>
    <Jumbotron>
      <h1 className="display-1">{title}</h1>
      <p className="lead">{tagline}</p>
    </Jumbotron>

    <div className="w-75 mx-auto mb-4">
      <AspectContainer>
        <Video
          title={`${title} Trailer`}
          url={trailer}
          className="w-100 h-100"
        />
      </AspectContainer>
    </div>

    <View />
  </div>
);

export default ProjectLayout;
