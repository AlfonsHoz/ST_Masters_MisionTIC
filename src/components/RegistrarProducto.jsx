import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import "../styles/registrarProducto.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RegistrarProducto = () => {
  const [id, setId] = useState({});
  const idRef = useRef();

  const [descr, setDescr] = useState({});
  const descrRef = useRef();

  const [precio, setPrecio] = useState({});
  const precioRef = useRef();

  useEffect(() => {
    descrRef.current.focus();
    setId(idRef.current);
    setDescr(descrRef.current);
    setPrecio(precioRef.current);
  }, []);

  const cleanUpTextFields = () => {
    id.value = "";
    descr.value = "";
    precio.value = "";
  };

  const submitTextFields = () => {
    console.log(id.value, descr.value, precio.value);
    if (!(id.value === "" || descr.value === "" || precio.value === "")) {
      alert("Se ha agregado el producto.");
      cleanUpTextFields();
    } else {
      alert("Ingrese toda la información, por favor.");
    }
  };

  const errorMessage = {
    position: "bottom-center",
    background: "#191c1f !important",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const mostrarMensaje = (e) => {
    if (!(id.value === "" || descr.value === "" || precio.value === "")) {
      toast.success("Usuario registrado correctamente!", errorMessage);
      cleanUpTextFields();
      e.preventDefault();
    } else {
      toast.error("Llene todos los campos!", errorMessage);
    }
  };

  return (
    <Container id="container_reg_prod" fluid>
      <h3 id="titulo-registrar-producto">Registrar producto</h3>
      <Form id="formulario-registrar-productos">
        <Row id="fila_inputs_reg_prod">
          <Col col-4>
            <Form.Group>
              <Form.Label>Identificador:</Form.Label>
              <Form.Control
                ref={idRef}
                type="text"
                placeholder="Identificador del producto"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col col-4>
            <Form.Group>
              <Form.Label>Descripción:</Form.Label>
              <Form.Control
                ref={descrRef}
                type="text"
                placeholder="Ingrese la descripción"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col col-4>
            <Form.Group>
              <Form.Label>Precio:</Form.Label>
              <Form.Control
                ref={precioRef}
                type="number"
                placeholder="Ingrese el precio"
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row id="fila_botones_reg_prod">
          <Col col-6 className="d-flex justify-content-end">
            <Button
              id="btn_reg_pro"
              onClick={mostrarMensaje}
              className="boton-generico-header"
            >
              Registrar producto
            </Button>
          </Col>
          <Col col-6 className="d-flex justify-content-start">
            <Button
              id="btn_cancel_pro"
              className="boton-generico-cancelar"
              onClick={cleanUpTextFields}
            >
              Limpiar
            </Button>
          </Col>
        </Row>
        <ToastContainer theme="dark" />
      </Form>
    </Container>
  );
};
