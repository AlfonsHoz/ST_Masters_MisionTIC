import React from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../styles/navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top">
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
                <button 
                  onClick={() => loginWithRedirect()}>Iniciar Sesion</button>
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
