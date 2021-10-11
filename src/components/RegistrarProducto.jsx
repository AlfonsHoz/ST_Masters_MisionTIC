import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import "../styles/registrarProducto.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "../hooks/useForm";
import { axiosPetition, respuesta } from '../helper/fetch';


export const RegistrarProducto = () => {

  const [formProductsValues, handleProductsInputChange, resetProductsForm] = useForm({
    codigo_producto: '',
    nombre_producto: '',
    precio_unitario: ''
  });

  const { codigo_producto, nombre_producto, precio_unitario } = formProductsValues;

  const configMensaje = {
    position: "bottom-center",
    background: "#191c1f !important",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await axiosPetition('producto', formProductsValues, 'POST');

    if (respuesta.ok) {
      resetProductsForm();
      toast.success('Producto registrado correctamente.', configMensaje);
    } else {
      toast.error(respuesta.msg, configMensaje);
    }

  }

  return (
    <Container id="container_reg_prod" fluid>
      <h3 id="titulo-registrar-producto">Registrar producto</h3>
      <Form id="formulario-registrar-productos" onSubmit={handleSubmit}>
        <Row id="fila_inputs_reg_prod">
          <Col col-4="true">
            <Form.Group>
              <Form.Label>Identificador:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Identificador del producto"
                name="codigo_producto"
                value={codigo_producto}
                onChange={handleProductsInputChange}
                required
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col col-4="true">
            <Form.Group>
              <Form.Label>Descripción:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la descripción"
                name="nombre_producto"
                value={nombre_producto}
                onChange={handleProductsInputChange}
                required
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col col-4="true">
            <Form.Group>
              <Form.Label>Precio:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese el precio"
                name="precio_unitario"
                value={precio_unitario}
                onChange={handleProductsInputChange}
                required
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row id="fila_botones_reg_prod">
          <Col col-6="true" className="d-flex justify-content-end">
            <Button
              id="btn_reg_pro"
              type="submit"
              className="boton-generico-header"
            >
              Registrar producto
            </Button>
          </Col>
          <Col col-6="true" className="d-flex justify-content-start">
            <Button
              id="btn_cancel_pro"
              className="boton-generico-cancelar"
              onClick={resetProductsForm}
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
