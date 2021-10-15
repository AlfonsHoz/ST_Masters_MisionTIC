import React, { useEffect, useState } from "react";
import "../../../styles/listadoventas.css";
import ListaVentas from "./ListaVentas";
import { Table } from "react-bootstrap";
import { useVentasContext } from "../../../context/ventasContext";
import { axiosPetition, respuesta } from "../../../helper/fetch";

const TablaVentas = () => {
  const [data, setdata] = useState([]);
  const { ventasConsultar } = useVentasContext();

  useEffect(async () => {
    await axiosPetition("ventas");
    if(respuesta.ok){
      setdata(respuesta.ventas);
    }
  }, []);

  return (
    <div className='listadoventas-container'>
      <h2 id='tituloTablaVentas'>Listado de ventas realizadas</h2>
      <Table
        id='tabla-ventas-registradas'
        striped
        hover
        variant='dark'
        className='text-center'>
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
          {data?.map((x, key) => {
            if (ventasConsultar) {
              return x.codigo === "V0001" ? <ListaVentas props={x} /> : ``;
            } else {
              return <ListaVentas key={key} props={x} />;
            }
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default TablaVentas;