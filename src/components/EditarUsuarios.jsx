import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import "../styles/editar_usuarios.css";
import { Link } from "react-router-dom";

const EditarUsuarios = () => {
  const editarUsuario = () => {
    alert("Se ha actualizado el usuario.");
  };

  return (
    <Container fluid id="container" className="m-0">
      <Row>
        <Col id="titulo" className="col-12 mt-6">
          <h2>Actualizar usuario</h2>
        </Col>
      </Row>
      <Form>
        <Row>
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
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="grupo_email">
                      <Form.Label>Estado:</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Seleccione...</option>
                        <option value="1">Activo</option>
                        <option value="2">Retirado</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col id="col-cent" className="xs-12 sm-12 md-12 lg-12">
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="grupo_nombre">
                      <Form.Label>Nombre:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nombre usuario"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="grupo_contraseña">
                      <Form.Label>Contraseña:</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Contraseña"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col id="col-derecha" className="xs-12 sm-12 md-12 lg-12">
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="grupo_rol">
                      <Form.Label>Rol:</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Seleccione</option>
                        <option value="1">Vendedor</option>
                        <option value="2">Administrador</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="grupo_contra_new">
                      <Form.Label>Contraseña nueva:</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Contraseña"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col col={6} id="col-actu" className="d-flex justify-content-end">
                <Button
                  className="cursor-pointer"
                  id="boton_actualizar"
                  onClick={editarUsuario}
                >
                  Actualizar usuario
                </Button>
              </Col>
              <Col
                col={6}
                id="col-cancel"
                className="d-flex justify-content-start"
              >
                <Link to="/usuarios">
                  <Button className="cursor-pointer" id="boton_cancelar" p-10>
                    Cancelar
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default EditarUsuarios;
