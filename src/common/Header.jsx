// @flow
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-navi";
import logo from "../assets/images/logo.png";

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="sm" collapseOnSelect>
    <Container>
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
      <Navbar.Toggle aria-controls="navbar" />
      <Navbar.Collapse id="navbar">
        <Nav className="ml-auto">
          <Nav.Link as={Link} href="/blog">
            Blog
          </Nav.Link>
          <Nav.Link as={Link} href="/portfolio">
            Portfolio
          </Nav.Link>
          <Nav.Link as={Link} href="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;