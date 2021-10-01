import React, { useEffect, useState } from "react";
import "../styles/listadoproducto.css";
import Productos from "./Productos";

const ListadoProductos = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/AlfonsHoz/jsonprueba/db")
      .then((response) => response.json())
      .then((dat) => setdata(dat.productos));
  }, []);

  return (
    <div className="listadoproductos-container">
      <h2>Listado de productos</h2>
      <div id="column-titles">
        <li id="li1">Identificador</li>
        <li id="li2">Descripcion</li>
        <li id="li3">Precio Unitario</li>
        <li id="li4">Acciones</li>
      </div>
      {data.map((x, key) => {
        return <Productos key={key} props={x} />;
      })}
    </div>
  );
};
export default ListadoProductos;
