import React, { useState, useEffect } from "react";
import "../styles/listadoUsuarios.css";
import { TablaUsuarios } from "./TablaUsuarios";
import {Table} from 'react-bootstrap';

const ResConsultaUsuario = ({ props }) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/AlfonsHoz/jsonprueba/db")
      .then((response) => response.json())
      .then((dat) => setdata(dat.usuarios));
  }, []);

  return (
    <>
      <div id="tablaConsUsuarios">
        <Table id="tabla-consulta-usuarios" striped hover variant="dark" className="text-center">
          <thead>
            <tr>
              <th>Identificación</th>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((x) => {
              return x.identificacion === 1113692937 ? (
                <TablaUsuarios props={x} />
              ) : (
                ``
              );
            })}
          </tbody>
        </Table>
        <span id="volver">Volver arriba</span>
      </div>
    </>
  );
};

export default ResConsultaUsuario;
