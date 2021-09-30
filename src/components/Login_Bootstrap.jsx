import React from "react";
import logo from "../assets/img/logo.svg";
//import "../styles/login.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import "../styles/login_bootstrap.css";

export const Login = () => {
  return (
    <section id="login">
      <Container fluid className="alto-100">
        <Row>
          <Col id="col-izq" col={12} md={12} lg={5}>
            <Row>
              <Col id="content-izq" className="col-12 col-lg-12 col-md-12">
                <Container fluid>
                  <Row>
                    <Col className="col-12 col-lg-12 d-flex justify-content-center">
                      <h3>Bienvenido a</h3>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-12 col-lg-12 d-flex justify-content-center">
                      <h1 id="titulo-principal">ST Masters</h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="col-12 col-lg-12 d-flex justify-content-center">
                      <form id="formulario" action="">
                        <Row>
                          <Col className="col-4 d-flex justify-content-center p-0">
                            <label htmlFor="usuario">Usuario:</label>
                          </Col>
                          <Col className="col-8 d-flex p-0">
                            <input
                              type="text"
                              placeholder="Ingresa tu nombre de usuario"
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col className="col-4 d-flex justify-content-center p-0">
                            <label htmlFor="contraseña">Contraseña:</label>
                          </Col>
                          <Col className="col-8 d-flex p-0">
                            <input
                              type="password"
                              placeholder="Ingresa tu contraseña"
                            />
                          </Col>
                        </Row>
                        <Row id="ayudas">
                          <Col id="checkbox">
                            <input
                              type="checkbox"
                              name="recordar"
                              id="recordar"
                            />{" "}
                            <span id="texto-checkbox">Recuérdame</span>
                          </Col>
                          <a id="olvido-contraseña" href="#">
                            Olvidé mi contraseña
                          </a>
                        </Row>
                        <Button id="boton-login" type="submit">
                          Iniciar sesión
                        </Button>
                      </form>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Col>
          <Col id="col-der" col={12} md={12} lg={7}></Col>
        </Row>
      </Container>
    </section>
  );
};

/*
<section id="login">
<div id="col-izq">
  <div id="content-izq">
    <h3>Bienvenido a</h3>
    <h1 id="titulo-principal">ST Masters</h1>
    <form id="formulario" action="">
      <label htmlFor="usuario">Usuario:</label>
      <input type="text" placeholder="Ingresa tu nombre de usuario" />
      <label htmlFor="contraseña">Contraseña:</label>
      <input type="password" placeholder="Ingresa tu contraseña" />
      <div id="ayudas">
        <div id="checkbox">
          <input type="checkbox" name="recordar" id="recordar" />{" "}
          <span id="texto-checkbox">Recuérdame</span>
        </div>
        <a id="olvido-contraseña" href="#">
          Olvidé mi contraseña
        </a>
      </div>
      <Button className="submit" type="submit">
        Iniciar sesión
      </Button>
    </form>
  </div>
</div>
<div id="col-der">
  <img id="logo" src={logo}></img>
  <h1>Manufacturing SAS</h1>
</div>
</section>
*/
