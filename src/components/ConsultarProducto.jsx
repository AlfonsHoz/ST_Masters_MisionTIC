import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/consultarProducto.css';

export const ConsultarProducto = () => {
    return (
        <div id="contenedorConsulta">
            <h2 id="titulo">Consultar productos</h2>
            <label htmlFor="buscarProducto">Buscar producto:</label>
            <input id="campoBuscar" name="buscarProducto" type="text" placeholder="Ingresa el código o nombre del producto" />
            <Link to="/productos/consultar" >
                <button className="boton-generico-header"
                >Consultar</button>
            </ Link>
        </div>
    );
}
