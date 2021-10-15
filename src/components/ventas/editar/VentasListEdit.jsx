import React from 'react'
import borrar from './images/eliminar.svg'

const VentasListEdit = ({ props }) => {
  const { codigo_producto, nombre_producto, precio_unitario, cantidad } = props;
  return (
    <>
      <div className="edit-prods-container">
        <li id="li1-edv">{codigo_producto}</li>
        <li id="li2-edv">{nombre_producto}</li>
        <li id="li3-edv">{precio_unitario}</li>
        <li id="li4-edv"> {cantidad} </li>
        <li id="li5-edv">
          <img src={borrar} alt="" />
        </li>
      </div>
    </>
  )
}

export default VentasListEdit
