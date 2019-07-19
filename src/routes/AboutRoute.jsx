// @flow
import React from "react";
import { route } from "navi";
import AboutPage from "../about/AboutPage";

export default route(async request => {
  return {
    title: "About AlmostBearded",
    head: (
      <meta
        name="description"
        content={
          "Details about Peter Oberrauner, his work, " +
          "his background and how you can get in contact " +
          "with him."
        }
      />
    ),
    view: <AboutPage />
  };
});
