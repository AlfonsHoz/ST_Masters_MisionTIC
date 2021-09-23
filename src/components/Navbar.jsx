import React from 'react'
import './styles/navbar.css'
import logo from './images/Logo.png'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>Gestionar ventas</li>
        <li>Gestionar vendedores</li>
        <img src={logo} alt="Logo" />
        <li>Gestionar usuarios</li>
        <li>Cerrar sesión</li>
      </ul>
    </nav>
  )
}

export default Navbar
