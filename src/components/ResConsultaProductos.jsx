import React, { useState, useEffect } from "react";

const ResConsultaProductos = ({ props }) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/AlfonsHoz/jsonprueba/db")
      .then((response) => response.json())
      .then((dat) => setdata(dat.productos));
  }, []);

  return (
    <div>
      <div id="column-titles">
        <li id="li1">Identificador</li>
        <li id="li2">Descripcion</li>
        <li id="li3">Precio Unitario</li>
        <li id="li4">Acciones</li>
      </div>
      {data.map((x) => {
        return x.codigo_producto === "PN0001" ? <Productos props={x} /> : ``;
      })}
    </div>
  );
};

export default ResConsultaProductos;
