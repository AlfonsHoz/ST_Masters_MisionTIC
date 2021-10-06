import React, { useEffect, useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import "../styles/listadoproducto.css";
import Productos from "./Productos";
import { useProductosContext } from '../context/productosContext';

const ListadoProductos = () => {

  const [data, setdata] = useState([]);
  const { productosConsultar } = useProductosContext();

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/AlfonsHoz/jsonprueba/db")
      .then((response) => response.json())
      .then((dat) => setdata(dat.productos));
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
              {data.map((datos, key) => {
                if (productosConsultar) {
                  return datos.codigo_producto === 'PN0001' ? <Productos props={datos} /> : ``;
                } else {
                  return <Productos key={key} props={datos} />;
                }
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default ListadoProductos;

