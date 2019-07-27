// @flow
import React from "react";
import { View } from "react-navi";
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
    <h1 className="display-1 text-center">{title}</h1>
    <p className="text-center lead">{tagline}</p>
    <hr className="mt-3 mb-5" />

    <div className="w-75 mx-auto mb-5">
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
