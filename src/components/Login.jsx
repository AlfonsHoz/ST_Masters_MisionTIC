import React from "react";
import logo from "../assets/img/logo.svg";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import logo_google from "../assets/img/logo-google.svg";
import { Link } from "react-router-dom";
import "../styles/login.css";
import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <section id='login'>
      <Container fluid>
        <Row id='principal'>
          <Col
            id='col-izq'
            className='position-relative'
            col={12}
            sm={12}
            md={12}
            lg={5}>
            <Row className='position-relative top-50 start-50 translate-middle'>
              <Col id='content-izq'>
                <Row>
                  <Col className='text-center'>
                    <h3>Bienvenido a</h3>
                    <h1 id='titulo-principal'>ST Masters</h1>
                  </Col>
                </Row>
                <Row>
                  <Col className='d-flex justify-content-center'>
                    <Link to='/ventas'>
                      <Button
                        onClick={() => loginWithRedirect()}
                        id='boton-gmail'
                        class='boton-generico'
                        type='submit'>
                        <img
                          id='logo_google'
                          src={logo_google}
                          alt='logo de google'
                        />
                        <br />
                        Iniciar con Gmail
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col id='col-der' lg={7}>
            <img id='logo' src={logo}></img>
            <h1>ST Masters</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
