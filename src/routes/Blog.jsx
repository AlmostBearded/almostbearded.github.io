import React from "react";
import Helmet from "react-helmet";
import Container from "react-bootstrap/Container";

const Blog = () => (
  <Container>
    <Helmet>
      <title>AlmostBearded's Blog</title>
      <meta name="description" content="Peter Oberrauner's Blog" />
    </Helmet>
    <h1 className="display-1 text-center">Blog</h1>
    <hr className="mt-3 mb-4" />
    <Container>Under Construcion</Container>
  </Container>
);

export default Blog;
