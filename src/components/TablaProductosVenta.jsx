
import React from 'react';
import eliminar from '../assets/img/eliminar.svg';

export const TablaProductosVenta = ({props}) => {
    
    const {codigo_producto = 'Sin coincidencias', nombre_producto= 'Sin coincidencias', precio_unitario= 'Sin coincidencias', cantidad='Sin coincidencias'} = props;
    return (
        <tr>
            <td>{codigo_producto}</td><td>{nombre_producto}</td><td>{precio_unitario}</td><td>{cantidad}</td><td>????</td><td><img src={eliminar} alt="" /></td>
        </tr>
    );
}
