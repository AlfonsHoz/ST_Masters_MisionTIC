import React from "react";
import "../styles/navbar.css";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
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
    </>
  );
};

export default Navbar;
