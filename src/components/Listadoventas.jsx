import React, { useEffect, useState } from 'react'
import './styles/listadoventas.css'
import Ventas from './Ventas';

const Listadoventas = () => {

  const [data, setdata] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/AlfonsHoz/jsonprueba/db')
      .then(response => response.json())
      .then(dat => setdata(dat.ventas));
  }, [])

  console.log(data);

  return (
    <div className="listadoventas-container">
      <h2>Listado de ventas realizadas</h2>
      <div id="column-titles">
        <span>Fecha</span>
        <span>Código</span>
        <span>Precio total</span>
        <span>Vendedor</span>
        <span>Acciones</span>
      </div>
      {
        data.map((x, key) => {
          return <Ventas key={key} props={x} />;
        })
      }

    </div>
  )
}
export default Listadoventas
