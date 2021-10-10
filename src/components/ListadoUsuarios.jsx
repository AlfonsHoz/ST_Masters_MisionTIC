import React, { useEffect, useState } from "react";
import "../styles/listadoUsuarios.css";
import { TablaUsuarios } from "./TablaUsuarios";
import { Table } from 'react-bootstrap';
import { useUsuariosContext } from '../context/usuariosContext';

export const ListadoUsuarios = () => {
  const [data, setdata] = useState([]);
  const { usuariosConsultar } = useUsuariosContext();

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/AlfonsHoz/jsonprueba/db")
      .then((response) => response.json())
      .then((dat) => setdata(dat.usuarios));
  }, []);

  return (
    <div id="contenedorListadoUsuarios">
      <h2 id="tituloListadoUsuarios">Listado de usuarios</h2>
      <div id="tablaUsuarios">
        <Table id="tabla-usuarios-registrados" striped hover variant="dark" className="text-center">
          <thead>
            <tr>
              <th>Identificación</th>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((datos, key) => {
              if (usuariosConsultar) {
                return datos.identificacion === 1113692937 ? <TablaUsuarios props={datos} /> : ``;
              } else {
                return <TablaUsuarios key={key} props={datos} />;
              }
            })}
          </tbody>
        </Table>
        <span id="volver">Volver arriba</span>
      </div>
    </div>
  );
};

export default ListadoUsuarios;
