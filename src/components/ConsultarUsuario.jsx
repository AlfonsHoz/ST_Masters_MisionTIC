import React from 'react';
import '../styles/consultarUsuario.css';

export const ConsultarUsuario = () => {
    return (
        <div id="contenedorBuscar">
            <h2 id="titulo">Consultar usuarios</h2>
            <div id="contenedorForm">
                <div id="campoLabel">
                    <label htmlFor="filtroUsuario">Filtrar por:</label>
                    <select name="filtroUsuario" id="campoBuscar">
                        <option value="1">Todos los roles</option>
                        <option value="2">Vendedor</option>
                        <option value="3">Operario</option>
                        <option value="3">Administrador</option>
                    </select>
                </div>
                <div id="campoLabel">
                    <label htmlFor="buscarUsuario">Buscar:</label>
                    <input id="campoBuscar" name="buscarUsuario" type="text" placeholder="Ingresa el nombre o identificación del usuario" />
                </div>
            </div>
        </div>
    );
}
