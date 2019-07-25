// @flow
import React from "react";

function Video({
  title,
  url,
  frameBorder = "0",
  allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
  allowFullScreen = true,
  ...otherProps
}: {
  title: string,
  url: string,
  frameBorder?: string,
  allow?: string,
  allowFullScreen?: boolean
}) {
  return (
    <iframe
      title={title}
      src={url}
      frameBorder={frameBorder}
      allow={allow}
      allowFullScreen={allowFullScreen}
      {...otherProps}
    />
  );
}

export default Video;
