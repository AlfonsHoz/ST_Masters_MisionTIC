import React, { useState, useEffect } from "react";
import "../styles/listadoUsuarios.css";
import { TablaUsuarios } from "./TablaUsuarios";

const ResConsultaUsuario = ({ props }) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/AlfonsHoz/jsonprueba/db")
      .then((response) => response.json())
      .then((dat) => setdata(dat.usuarios));
  }, []);

  return (
    <>
      <div id="tablaUsuarios">
        <table>
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
        </table>
        <span id="volver">Volver arriba</span>
      </div>
    </>
  );
};

export default ResConsultaUsuario;
