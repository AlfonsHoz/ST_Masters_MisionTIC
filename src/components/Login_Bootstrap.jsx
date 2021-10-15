import React from "react";
import logo from "../assets/img/logo.svg";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import logo_google from "../assets/img/logo-google.svg";
import { Link } from "react-router-dom";
import "../styles/login_bootstrap.css";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from "../components/PrivateRoute.jsx";


export const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <section id="login">
      <Container fluid>
        <Row id="principal">
          <Col
            id="col-izq"
            className="position-relative"
            col={12}
            sm={12}
            md={12}
            lg={5}
          >
            <Row className="position-relative top-50 start-50 translate-middle">
              <Col id="content-izq">
                <Row>
                  <h3>Bienvenido a</h3>
                  <h1 id="titulo-principal">ST Masters</h1>
                </Row>
                <Form>
                  <Row>
                    <Col className="">
                      <Form.Group className="mb-3">
                        <Form.Label>Usuario:</Form.Label>
                        <Form.Control
                          id="campo-login"
                          type="text"
                          placeholder="Ingresa tu nombre de usuario"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control
                          id="campo-login"
                          type="password"
                          placeholder="Ingresa tu contraseña"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group className="d-flex justify-content-between">
                        <Form.Check label="Recuérdame"></Form.Check>
                        <a id="olvido-contraseña" href="#">
                          Olvidé mi contraseña
                        </a>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Link to="/ventas">
                        <Button id="boton-login" type="submit">
                          Iniciar sesión
                        </Button>
                      </Link>
                        <Button onClick={() => loginWithRedirect()}
                          id="boton-gmail"
                          class="boton-generico"
                          type="submit"
                        >
                          <img
                            id="logo_google"
                            src={logo_google}
                            alt="logo de google"
                          />
                          Iniciar con Gmail
                        </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col id="col-der" lg={7}>
            <img id="logo" src={logo}></img>
            <h1>ST Masters</h1>
          </Col>
        </Row>
      </Container>
    </section>

  );
};
