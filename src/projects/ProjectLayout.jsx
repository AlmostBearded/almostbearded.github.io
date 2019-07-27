// @flow
import React from "react";
import { View } from "react-navi";

const ProjectLayout = ({
  title,
  tagline
}: {
  title: string,
  tagline: string
}) => (
  <div>
    <h1 className="display-1 text-center">{title}</h1>
    <p className="text-center lead">{tagline}</p>
    <hr className="mt-3 mb-5" />
    <View />
  </div>
);

export default ProjectLayout;
