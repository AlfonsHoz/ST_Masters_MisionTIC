import React from 'react'
import '../styles/ventas.css'
import ojo from './images/ojo.svg'
import borrar from './images/eliminar.svg'

const Ventas = ({ props }) => {
  const { fecha, codigo, total, vendedor } = props;
  return (
    <ul className="info-cont">
      <li id="li1">{fecha}</li>
      <li id="li2">{codigo}</li>
      <li id="li3">{total}</li>
      <li id="li4">{vendedor}</li>
      <li id="li5">
        <img src={ojo} alt="" />
        <img src={borrar} alt="" />
      </li>
    </ul>
  )
}

export default Ventas
