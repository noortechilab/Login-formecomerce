import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Navbar
        bg="dark"
        expand="lg"
        position=""
        className="text-white sticky-top shadow p-3"
      >
        <Container>
          <NavLink
            to="/home"
            className="text-white fs-5"
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            PROSHOPPING SITE
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto " text-white>
              <NavLink
                to="/home"
                className="text-white text-decoration-none mt-2 ms-2"
              >
                Home
              </NavLink>
              <NavLink
                to="/About"
                className="text-white text-decoration-none mt-2 ms-2"
              >
                About us
              </NavLink>
              <NavLink
                to="/contact"
                className="text-white text-decoration-none mt-2 ms-2"
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/cart"
                className="text-white text-decoration-none mt-2 ms-2"
              >
                Cart
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
