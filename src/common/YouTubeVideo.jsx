// @flow
import React from "react";

function YouTubeVideo({
  title,
  id,
  frameBorder = "0",
  allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
  allowFullScreen = true,
  ...otherProps
}: {
  title: string,
  id: string,
  frameBorder?: string,
  allow?: string,
  allowFullScreen?: boolean
}) {
  return (
    <iframe
      title={title}
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder={frameBorder}
      allow={allow}
      allowFullScreen={allowFullScreen}
      {...otherProps}
    />
  );
}

export default YouTubeVideo;
