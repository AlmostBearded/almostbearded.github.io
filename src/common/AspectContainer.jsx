import React from "react";

function AspectContainer({
  aspectRatio = 16 / 9,
  children
}: {
  aspectRatio: number,
  children: React.Element
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingTop: `${100 / aspectRatio}%`
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        {children}
      </div>
      >
    </div>
  );
}

export default AspectContainer;
