import React, { useState, useEffect } from 'react'
import Ventas from './Ventas';
import '../styles/resconsultaventas.css';
import {Table} from 'react-bootstrap';

const ResConsultaVentas = () => {

  const [data, setdata] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/AlfonsHoz/jsonprueba/db')
      .then(response => response.json())
      .then(dat => setdata(dat.ventas));
  }, [])

  return (
    <div className="res-cons-cont">
      <Table id="tabla-consultar-venta" striped hover variant="dark" className="text-center">
        <thead>
          <tr>
              <th>Fecha</th>
              <th>Código</th>
              <th>Precio total</th>
              <th>Vendedor</th>
              <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x) => {
            return (x.codigo === "V0001") ? <Ventas props={x} /> : ``;
          }
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default ResConsultaVentas
