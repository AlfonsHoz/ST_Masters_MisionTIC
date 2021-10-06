import React from 'react';
import { useUsuariosContext } from '../context/usuariosContext';
import '../styles/consultarUsuario.css';

const ConsultarUsuario = () => {

    const { usuariosConsultar, setUsuariosConsultar } = useUsuariosContext();

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
            <button id="boton-registrar-usuario" class="boton-generico-header" onClick={(e) => {
                e.preventDefault();
                setUsuariosConsultar(!usuariosConsultar);
            }}>
                {usuariosConsultar ?
                    "Todos los usuarios"
                    :
                    "Consultar"
                }
            </button>
        </div>
    );
}

export default ConsultarUsuario;