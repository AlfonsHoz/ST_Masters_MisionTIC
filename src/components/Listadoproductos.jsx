import React, { useEffect, useState } from "react";
import { Container, Table, Row, Col, Button } from "react-bootstrap";
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
              {data.map((x, key) => {
                return <Productos key={key} props={x} />;
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default ListadoProductos;

