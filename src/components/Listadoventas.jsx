import React, { useEffect, useState } from 'react'
import '../styles/listadoventas.css'
import Ventas from './Ventas';
import {Table} from 'react-bootstrap';
import { useVentasContext } from '../context/ventasContext';

const Listadoventas = () => {

  const [data, setdata] = useState([]);
  const {ventasConsultar} = useVentasContext();

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/AlfonsHoz/jsonprueba/db')
      .then(response => response.json())
      .then(dat => setdata(dat.ventas));
    }, []);

  return (
    <div className="listadoventas-container">
      <h2 id="tituloTablaVentas">Listado de ventas realizadas</h2>
        <Table id="tabla-ventas-registradas" striped hover variant="dark" className="text-center">
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
            {data.map((x, key) => {
              if (ventasConsultar) {
                return (x.codigo === "V0001") ? <Ventas props={x} /> : ``;
              } else {
                return <Ventas key={key} props={x} />;
              }
            })}
          </tbody>
        </Table>
      </div>
  );
};
export default Listadoventas;
