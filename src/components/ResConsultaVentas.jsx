import React, { useState, useEffect } from 'react'
import Ventas from './Ventas';

const ResConsultaVentas = () => {

  const [data, setdata] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/AlfonsHoz/jsonprueba/db')
      .then(response => response.json())
      .then(dat => setdata(dat.ventas));
  }, [])

  return (
    <>
      <div id="column-titles">
        <li id="li1-li-vt">Fecha</li>
        <li id="li2-li-vt">Código</li>
        <li id="li3-li-vt">Precio total</li>
        <li id="li4-li-vt">Vendedor</li>
        <li id="li5-li-vt">Acciones</li>
      </div>
      {data.map((x) => {
        return (x.codigo === "V0001") ? <Ventas props={x} /> : ``;
      }
      )}
    </>
  )
}

export default ResConsultaVentas
