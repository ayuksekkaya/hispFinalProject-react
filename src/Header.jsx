import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/quizes">
          Quizes
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
