import React, { useEffect, useState } from 'react';
import '../styles/listadoUsuarios.css';
import { TablaUsuarios } from './TablaUsuarios';

export const ListadoUsuarios = () => {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/AlfonsHoz/jsonprueba/db')
            .then(response => response.json())
            .then(dat => setdata(dat.usuarios));
    }, []);

    return (
        <div id="contenedorListadoUsuarios">
            <h2 id="tituloListadoUsuarios">Listado de usuarios</h2>
            <div id="tablaUsuarios">
                <table>
                    <thead>
                        <tr>
                            <th>Identificación</th><th>Nombre</th><th>Rol</th><th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((datos, key) => {
                                return <TablaUsuarios key={key} props={datos} />;
                            })
                        }
                    </tbody>
                </table>
                <span id="volver">Volver arriba</span>
            </div>
        </div>
    );
}

export default ListadoUsuarios;