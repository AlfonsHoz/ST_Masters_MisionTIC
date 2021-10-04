import React from 'react';
import '../styles/listadoUsuarios.css';
import eliminar from '../assets/img/eliminar.svg';
import lapiz from '../assets/img/lapiz.svg';
import {Link} from 'react-router-dom';

export const TablaUsuarios = ({props}) => {
    const {identificacion = 'Sin coincidencias', nombre= 'Sin coincidencias', rol= 'Sin coincidencias'} = props;
    return (
        <tr>
            <td>{identificacion}</td><td>{nombre}</td><td>{rol}</td><td><img src={eliminar} alt="" /> <Link to="usuarios/editar"><img src={lapiz} alt="" /></Link></td>
        </tr>
    );
}
