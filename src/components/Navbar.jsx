import React from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-center">
            <Nav className="d-flex justify-content-between">
              <Link to="/ventas" className="Link">
                <Nav.Link href="/ventas">Gestionar Ventas</Nav.Link>
              </Link>
              <Link to="/usuarios" className="Link">
                <Nav.Link href="/usuarios">Gestionar Usuarios</Nav.Link>
              </Link>
              <img id="img_navbar" src={logo} alt="Logo" />
              <Link to="/productos" className="Link">
                <Nav.Link href="/productos">Gestionar Productos</Nav.Link>
              </Link>
              <Link to="/" className="Link">
                <Nav.Link href="/">Cerrar Sesion</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

/*
<nav>
<ul>
  <Link to="/ventas">
    <li>Gestionar ventas</li>
  </Link>
  <Link to="/usuarios">
    <li>Gestionar usuarios</li>
  </Link>
  <img src={logo} alt="Logo" />
  <Link to="/productos">
    <li>Gestionar productos</li>
  </Link>
  <Link to="/">
    <li>Cerrar sesión</li>
  </Link>
</ul>
</nav>
*/
