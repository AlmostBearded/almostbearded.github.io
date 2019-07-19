// @flow
import React from "react";
import { route } from "navi";
import BlogPage from "../blog/BlogPage";

export default route(request => {
  return {
    title: "AlmostBearded's Blog",
    head: <meta name="description" content="Peter Oberrauner's Blog" />,
    view: <BlogPage />
  };
});
