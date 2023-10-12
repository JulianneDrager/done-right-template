import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import NavStyle from "./Nav.module.css";

const Navigation = () => {
  const navBar = NavStyle.navBar;
  const containerNav = NavStyle.containerNav
  return (
    <>
      <Navbar className={navBar} expand="lg">
        <Container className={containerNav}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                Home
              </Nav.Link>
              <Nav.Link href="#about">
                About
              </Nav.Link>
              <Nav.Link href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;
