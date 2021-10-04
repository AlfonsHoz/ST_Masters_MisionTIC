import React from 'react';
import '../styles/consultarUsuario.css';
import {Link} from 'react-router-dom';

const ConsultarUsuario = () => {
    return (
        <div id="consultarUsuarios">
            <h2 id="tituloUsuario">Consultar usuarios</h2>
            <div id="contenedorForm">
                <div id="campoLabel">
                    <label htmlFor="filtroUsuario">Filtrar por:</label>
                    <select name="filtroUsuario" className="campo-buscar-usuario">
                        <option value="1">Todos los roles</option>
                        <option value="2">Vendedor</option>
                        <option value="3">Operario</option>
                        <option value="3">Administrador</option>
                    </select>
                </div>
                <div id="campoLabel">
                    <label htmlFor="buscarUsuario">Buscar:</label>
                    <input className="campo-buscar-usuario" name="buscarUsuario" type="text" placeholder="Ingresa el nombre o identificación del usuario" />
                </div>
            </div>
            <Link to="/usuarios/consultar">
                <button id="boton-registrar-usuario" class="boton-generico-header">Consultar</button>
            </Link>
        </div>
    );
}

export default ConsultarUsuario;