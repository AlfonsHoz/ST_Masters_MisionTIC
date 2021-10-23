import React from 'react';
import { useConsultarUsuarioContext } from '../../context/consultarUsuarioContext';
import { useForm } from '../../hooks/useForm';
import '../../styles/consultarUsuario.css';

const ConsultarUsuario = () => {

    const { setConsultaUsuario } = useConsultarUsuarioContext();

    const [formFindUsuarioValues, handleFindUsuarioInputChange] = useForm({
        busqueda: '',
        rol: 'todos'
    });

    const { busqueda, rol } = formFindUsuarioValues;


    return (
        <div id="consultarUsuarios">
            <h2 id="tituloUsuario">Consultar usuarios</h2>
            <form>
                <div id="contenedorForm">
                    <div id="campoLabel">
                        <label htmlFor="filtroUsuario">Filtrar por:</label>
                        <select name="filtroUsuario" className="campo-buscar-usuario" name="rol" value={rol} onChange={handleFindUsuarioInputChange}>
                            <option value="Todos">Todos los roles</option>
                            <option value="Vendedor">Vendedor</option>
                            <option value="Operario">Operario</option>
                            <option value="Admin">Administrador</option>
                        </select>
                    </div>
                    <div id="campoLabel">
                        <label htmlFor="buscarUsuario">Buscar:</label>
                        <input
                            className="campo-buscar-usuario"
                            name="buscarUsuario"
                            type="text"
                            placeholder="Ingresa el nombre o identificación del usuario"
                            name="busqueda"
                            value={busqueda}
                            onChange={handleFindUsuarioInputChange}
                            autoComplete="off"
                        />
                    </div>
                </div>
                <button type="submit" id="boton-registrar-usuario" className="boton-generico-header" onClick={
                    (e) => {
                        setConsultaUsuario({ busqueda, rol });
                        e.preventDefault();
                    }} >
                    Consultar
                </button>
            </form>
        </div>
    );
}

export default ConsultarUsuario;