import React, { useEffect, useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import "../styles/listadoproducto.css";
import Productos from "./Productos";
import { axiosPetition, respuesta } from '../helper/fetch';
import { useConsultarProductoContext } from '../context/consultarProductoContext';
import { toast } from "react-toastify";


const ListadoProductos = () => {

  const { consultaProducto } = useConsultarProductoContext();
  const [data, setData] = useState([]);

  const configMensaje = {
    position: "bottom-center",
    background: "#191c1f !important",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  };

  useEffect(async () => {

    await axiosPetition('producto');
    setData(respuesta.productos);
    if (!respuesta.ok) {
      toast.error('Ha ocurrido un error al intentar obtener la lista de productos.', configMensaje);
    }
  }, []);


  return (
    <Container fluid id="content-tbl-prod">
      <Row className="mb-4">
        <Col>
          <h2 id="titulo-consultar-producto">Listado productos</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table id="tabla-productos-registrados" striped hover variant="dark" className="text-center">
            <thead>
              <tr>
                <th>Identificador</th>
                <th>Descripción</th>
                <th>Precio Unitario</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((datos, key) => {
                if (consultaProducto !== '') {
                  return datos.codigo_producto === consultaProducto || datos.nombre_producto === consultaProducto ? <Productos key={datos._id} props={datos} /> : ``;
                } else {
                  return <Productos key={datos._id} props={datos} />;
                }
              })
              }
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default ListadoProductos;

