import React from "react";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";

const Home = () => (
  <Container>
    <Helmet>
      <title>AlmostBearded</title>
      <meta
        name="description"
        content="Website of Peter Oberrauner containing details about him, his portfolio and his blog."
      />
    </Helmet>
    <h1 className="display-1 text-center">AlmostBearded</h1>
    <hr className="mt-3 mb-4" />
    <Container>Under Construcion</Container>
  </Container>
);

export default Home;
