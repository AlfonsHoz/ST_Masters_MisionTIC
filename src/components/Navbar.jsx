import React from 'react';
import '../styles/navbar.css';
import logo from '../assets/img/logo.svg';
import { Header } from './Header';

const Navbar = () => {
  return (
    <>
    <nav>
      <ul>
        <li>Gestionar ventas</li>
        <li>Gestionar usuarios</li>
        <img src={logo} alt="Logo" />
        <li>Gestionar productos</li>
        <li>Cerrar sesión</li>
      </ul>
    </nav>
    <Header />
    </>
  );
}

export default Navbar;