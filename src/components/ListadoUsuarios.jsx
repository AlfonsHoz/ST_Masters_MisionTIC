import React from 'react';
import '../styles/listadoUsuarios.css';
import eliminar from '../assets/img/eliminar.svg';
import lapiz from '../assets/img/lapiz.svg';

export const ListadoUsuarios = ({id = 'Sin coincidencias', nombre= 'Sin coincidencias', rol= 'Sin coincidencias'}) => {
    return (
        <div id="contenedorListadoUsuarios">
            <h2>Listado de usuarios</h2>
            <div id="tablaUsuarios">
                <table>
                    <thead>
                        <tr>
                            <th>Identificación</th><th>Nombre</th><th>Rol</th><th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{id}</td><td>{nombre}</td><td>{rol}</td><td><img src={eliminar} alt="" /> <img src={lapiz} alt="" /></td>
                        </tr>
                    </tbody>
                </table>
                <span id="volver">Volver arriba</span>
            </div>
        </div>
    );
}
