import React from "react";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";

const Portfolio = () => (
  <Container>
    <Helmet>
      <title>AlmostBearded's Portfolio</title>
      <meta name="description" content="Peter Oberrauner's Portfolio" />
    </Helmet>
    <h1 className="display-1 text-center">Portfolio</h1>
    <hr className="mt-3 mb-4" />
    <Container>Under Construcion</Container>
  </Container>
);

export default Portfolio;
