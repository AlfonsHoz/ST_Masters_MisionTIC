import React from "react";
import { Col, Container, Form, FormGroup, Row, Button } from "react-bootstrap";
import "../styles/consultarProducto.css";

const ConsultarProducto = () => {
  return (
    <Container fluid id="cont-cons-pro">
      <Row className={"col-4"}>
        <Col>
          <h2 id="tit-con-prod" className="mb-4">
            Consultar productos
          </h2>
          <Form>
            <FormGroup className="mb-3">
              <Form.Label>Buscar producto:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el codigo o nombre del producto"
              ></Form.Control>
            </FormGroup>
            <Button className="boton-generico-header">Consultar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ConsultarProducto;

/*
<div id="contenedorConsulta">
<h2 id="titulo">Consultar productos</h2>
<label htmlFor="buscarProducto">Buscar producto:</label>
<input
  id="campoBuscar"
  name="buscarProducto"
  type="text"
  placeholder="Ingresa el código o nombre del producto"
/>
<button className="boton-generico-header">Consultar</button>
</div>
*/
