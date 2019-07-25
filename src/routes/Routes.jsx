// @flow
import React from "react";
import { mount, withView, lazy } from "navi";
import MainLayout from "../common/MainLayout";

const routes = withView(
  () => <MainLayout />,
  mount({
    "/": lazy(() => import("./HomeRoute")),
    "/about": lazy(() => import("./AboutRoute")),
    "/blog": lazy(() => import("./BlogRoute")),
    "/projects": lazy(() => import("./ProjectsRoute"))
  })
);

export default routes;
