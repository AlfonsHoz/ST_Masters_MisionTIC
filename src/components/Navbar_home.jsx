import React from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../styles/navbar_home.css";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-center">
            <Nav id="navbar_home" className="d-flex justify-content-between">
              <img id="img_navbar" src={logo} alt="Logo" />
              <h1>ST MASTERS</h1>
              <Link to="/" className="Link">
                <Nav.Link href="/">Iniciar Sesion</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
