import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import "../styles/registrarproducto.css";

export const RegistrarProducto = () => {
  return (
    <Container id="container_reg_prod" fluid>
      <h3>Registrar producto</h3>
      <Form>
        <Row id="fila_inputs_reg_prod">
          <Col col-4>
            <Form.Group>
              <Form.Label>Identificador:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Identificador del producto"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col col-4>
            <Form.Group>
              <Form.Label>Descripción:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la descripción"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col col-4>
            <Form.Group>
              <Form.Label>Precio:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el precio"
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row id="fila_botones_reg_prod">
          <Col col-6 className="d-flex justify-content-end">
            <Button id="btn_reg_pro" className="boton-generico-header">
              Registrar productoS
            </Button>
          </Col>
          <Col col-6 className="d-flex justify-content-start">
            <Button id="btn_cancel_pro" className="boton-generico-cancelar">
              Limpiar
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
