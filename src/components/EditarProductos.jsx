import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import "../styles/editar_productos.css";

export const EditarProductos = () => {
  return (
    <Container fluid id="container" className="m-0">
      <Row>
        <Col id="titulo" className="col-12 mt-6">
          <h2>Actualizar producto</h2>
        </Col>
      </Row>
      <Form>
        <Row>
          // -------------CONTENIDO DEL FORMULARIO ---------------
          <Col id="contenido_form" className="col-12">
            <Row>
              <Col id="col-izquierda" className="xs-12 sm-12 md-12 lg-12">
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="grupo_email">
                      <Form.Label>Identificador:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Numero de identificacion"
                        readOnly
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col id="col-cent" className="xs-12 sm-12 md-12 lg-12">
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="grupo_nombre">
                      <Form.Label>Descripción:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Descripcion producto"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col id="col-derecha" className="xs-12 sm-12 md-12 lg-12">
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="grupo_rol">
                      <Form.Label>Precio:</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Precio"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col col={6} id="col-actu" className="d-flex justify-content-end">
                <Button id="boton_actualizar">Actualizar producto</Button>
              </Col>
              <Col
                col={6}
                id="col-cancel"
                className="d-flex justify-content-start"
              >
                <Button id="boton_cancelar" p-10>
                  Cancelar
                </Button>
              </Col>
            </Row>
          </Col>
          // ---------------------------------------------------------
        </Row>
      </Form>
    </Container>
  );
};
