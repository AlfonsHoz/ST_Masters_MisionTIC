import React, { useEffect, useState } from "react";
import "../../../styles/listadoventas.css";
import ListaVentas from "./ListaVentas";
import { Table } from "react-bootstrap";
import { axiosPetition, respuesta } from "../../../helper/fetch";
import { useConsultarVentaContext } from "../../../context/consultarVentaContext";
import { useAuth0 } from "@auth0/auth0-react";

const TablaVentas = () => {
  const { consultaVenta } = useConsultarVentaContext();
  const [data, setdata] = useState([]);

  const { getAccessTokenSilently, user, isAuthenticated  } =
  useAuth0();

  useEffect(async () => {
    if (isAuthenticated) {
    await axiosPetition("ventas");
    if (respuesta.ok) {
      setdata(respuesta.ventas);
    }
    }
  }, [getAccessTokenSilently, user, isAuthenticated]);

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
            if (consultaVenta.trim() !== '') {
              return x.codigo === consultaVenta.trim() ? <ListaVentas props={x} /> : ``;
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
