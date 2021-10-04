import React, { useEffect, useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
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
          <h2>Listado productos</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped hover variant="dark" className="text-center">
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

/*
<div className="listadoproductos-container">
<h2>Listado de productos</h2>
<div id="column-titles">
  <li id="li1">Identificador</li>
  <li id="li2">Descripcion</li>
  <li id="li3">Precio Unitario</li>
  <li id="li4">Acciones</li>
</div>
{data.map((x, key) => {
  return <Productos key={key} props={x} />;
})}
</div>

*/
