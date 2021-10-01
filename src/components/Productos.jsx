import React from 'react'
import '../styles/productos.css'
import ojo from './images/ojo.svg'
import borrar from './images/eliminar.svg'

const Productos = ({ props }) => {
  const { codigo_producto, nombre_producto, precio_unitario, Acciones } = props;
  return (
    <ul className="info-container">
      <li id="li1">{codigo_producto}</li>
      <li id="li2">{nombre_producto}</li>
      <li id="li3">{precio_unitario}</li>
      <li id="li4">{Acciones}
        <img src={ojo} />
        <img src={borrar} />
      </li>
    </ul>
  )
}

export default Productos
