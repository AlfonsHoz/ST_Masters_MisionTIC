import React from 'react'
import '../styles/listadoUsuarios.css';
import { TablaUsuarios } from './TablaUsuarios';

const ResConsultaUsuario = ({ props }) => {
  return (
    <>
      <div id="tablaUsuarios">
        <table>
          <thead>
            <tr>
              <th>Identificación</th><th>Nombre</th><th>Rol</th><th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <TablaUsuarios props={props} />
          </tbody>
        </table>
        <span id="volver">Volver arriba</span>
      </div>
    </>
  )
}

export default ResConsultaUsuario
