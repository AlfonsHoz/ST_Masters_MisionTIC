import React from 'react'

const ResConsultaProductos = ({ props }) => {
  return (
    <div>
      <div id="column-titles">
        <li id="li1">Identificador</li>
        <li id="li2">Descripcion</li>
        <li id="li3">Precio Unitario</li>
        <li id="li4">Acciones</li>
      </div>
      <Productos props={props} />
    </div>
  )
}

export default ResConsultaProductos
