import React from 'react'

const ResConsultaVentas = ({ props }) => {
  return (
    <>
      <div id="column-titles">
        <li id="li1">Fecha</li>
        <li id="li2">Código</li>
        <li id="li3">Precio total</li>
        <li id="li4">Vendedor</li>
        <li id="li5">Acciones</li>
      </div>
      <Ventas props={props} />
    </>
  )
}

export default ResConsultaVentas
