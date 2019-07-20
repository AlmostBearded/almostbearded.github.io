// @flow
import React from "react";
import { View } from "react-navi";
import Container from "react-bootstrap/Container";
import Header from "./Header";

const MainLayout = () => (
  <div>
    <Header />
    <Container>
      <View />
    </Container>
  </div>
);

export default MainLayout;
