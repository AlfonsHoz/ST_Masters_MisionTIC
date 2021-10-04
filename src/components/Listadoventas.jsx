import React, { useEffect, useState } from 'react'
import '../styles/listadoventas.css'
import Ventas from './Ventas';

const Listadoventas = () => {

  const [data, setdata] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/AlfonsHoz/jsonprueba/db')
      .then(response => response.json())
      .then(dat => setdata(dat.ventas));
  }, [])

  return (
    <div className="listadoventas-container">
      <h2 id="tituloTablaVentas">Listado de ventas realizadas</h2>
      <div id="column-titles">
        <li id="li1-li-vt">Fecha</li>
        <li id="li2-li-vt">Código</li>
        <li id="li3-li-vt">Precio total</li>
        <li id="li4-li-vt">Vendedor</li>
        <li id="li5-li-vt">Acciones</li>
      </div>
      {data.map((x, key) => {
        return <Ventas key={key} props={x} />;
      })}
    </div>
  );
};
export default Listadoventas;
