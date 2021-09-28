import React from 'react';
import '../styles/consultarProducto.css';

export const ConsultarProducto = () => {
    return (
        <div id="contenedorConsulta">  
            <h2>Consultar productos</h2>
            <label htmlFor="buscarProducto">Buscar producto:</label>
            <input id="campoBuscar" name="buscarProducto" type="text" placeholder="Ingresa el código o nombre del producto"/>
        </div>
    );
}
