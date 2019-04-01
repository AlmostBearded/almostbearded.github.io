import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <LinkContainer to="/">
        <Navbar.Brand>
          <img
            alt=""
            src="/logo.ico"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {" AlmostBearded"}
        </Navbar.Brand>
      </LinkContainer>
      <Nav className="ml-auto">
        <LinkContainer to="/portfolio">
          <Nav.Link>Portfolio</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/contact">
          <Nav.Link>Contact</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
      </Nav>
    </Container>
  </Navbar>
);

export default Header;
