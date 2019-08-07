// @flow

import React from "react";
import BSFigure from "react-bootstrap/Figure";

function Figure({
  src,
  caption,
  alt,
  className = "w-100 p-2",
  imageClassName = "w-100",
  captionClassName = "text-center"
}: {
  src: string,
  caption: string,
  alt?: string,
  className?: string,
  imageClassName?: string,
  captionClassName?: string
}) {
  alt = alt || caption;
  return (
    <BSFigure className={className}>
      <BSFigure.Image alt={alt} src={src} className={imageClassName} />
      <BSFigure.Caption className={captionClassName}>
        {caption}
      </BSFigure.Caption>
    </BSFigure>
  );
}

export default Figure;
