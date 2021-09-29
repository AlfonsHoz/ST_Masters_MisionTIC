import React from 'react';
import '../styles/listadoUsuarios.css';
import eliminar from '../assets/img/eliminar.svg';
import lapiz from '../assets/img/lapiz.svg';

export const TablaUsuarios = ({props}) => {
    const {identificacion = 'Sin coincidencias', nombre= 'Sin coincidencias', rol= 'Sin coincidencias'} = props;
    return (
        <tr>
            <td>{identificacion}</td><td>{nombre}</td><td>{rol}</td><td><img src={eliminar} alt="" /> <img src={lapiz} alt="" /></td>
        </tr>
    );
}
