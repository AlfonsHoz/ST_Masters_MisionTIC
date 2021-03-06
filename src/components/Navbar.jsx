import React from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "../styles/navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { user, logout } = useAuth0();

  const cerrarSesion = () => {
    logout({ returnTo: "https://stmasters.herokuapp.com/" });
    localStorage.setItem("token", null);
  };
  return (
    <>
      <Navbar collapseOnSelect expand='lg' variant='dark' fixed='top'>
        <Container fluid>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse className='justify-content-center'>
            <Nav className='d-flex justify-content-between'>
              <Link to='/ventas' className='Link'>
                <Nav.Link href='/ventas'>Gestionar Ventas</Nav.Link>
              </Link>
              <Link to='/usuarios' className='Link'>
                <Nav.Link href='/usuarios' usuario={user}>
                  Gestionar Usuarios
                </Nav.Link>
              </Link>
              <img id='img_navbar' src={logo} alt='Logo' />
              <Link to='/productos' className='Link'>
                <Nav.Link href='/productos'>Gestionar Productos</Nav.Link>
              </Link>
              <Link to='/' className='Link'>
                <Nav.Link onClick={() => cerrarSesion()}>
                  Cerrar sesión
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
