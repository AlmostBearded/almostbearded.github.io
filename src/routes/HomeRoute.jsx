import React from "react";
import { route } from "navi";
import HomePage from "../home/HomePage";

export default route(async request => {
  return {
    title: "AlmostBearded",
    head: (
      <meta
        name="description"
        content="Website of Peter Oberrauner containing details about him, his portfolio and his blog."
      />
    ),
    view: <HomePage />
  };
});
