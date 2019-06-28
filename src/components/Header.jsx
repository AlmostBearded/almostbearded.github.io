import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/images/logo.png";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="sm" collapseOnSelect>
    <Container>
      <LinkContainer to="/">
        <Navbar.Brand>
          <img
            alt="Logo"
            src={logo}
            width="34"
            height="34"
            style={{ imageRendering: "pixelated" }}
            className="d-inline-block align-top"
          />
          {" AlmostBearded"}
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="ml-auto">
          <LinkContainer to="/blog">
            <Nav.Link>Blog</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/portfolio">
            <Nav.Link>Portfolio</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
