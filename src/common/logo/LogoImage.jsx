import React from "react";
import logo from "./logo.png";

const LogoImage = ({ ...props }) => (
  <img
    alt="Logo"
    src={logo}
    style={{ imageRendering: "pixelated" }}
    {...props}
  />
);

export default LogoImage;
