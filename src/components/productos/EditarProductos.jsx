import React, { useRef, useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import "../../styles/editar_productos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProductosContext } from "../../context/productosContext";
import { axiosPetition, respuesta } from "../../helper/fetch";
import { useForm } from "../../hooks/useForm";
import { Redirect } from "react-router-dom";

const ProductosEditar = () => {
  const { productoEditar } = useProductosContext();
  const refEstado = useRef();
  const [estadoState, setestado] = useState(productoEditar.estado);

  const [formProductsValues, handleProductsInputChange, resetProductsForm] =
    useForm({
      codigo_producto: productoEditar.codigo_producto,
      nombre_producto: productoEditar.nombre_producto,
      precio_unitario: productoEditar.precio_unitario,
      estado: productoEditar.estado,
    });

  const { codigo_producto, nombre_producto, precio_unitario, estado } =
    formProductsValues;

  const configMensaje = {
    position: "bottom-center",
    background: "#191c1f !important",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formProductsValues);

    await axiosPetition(
      `producto/${productoEditar.codigo_producto}`,
      formProductsValues,
      "PUT"
    );

    if (respuesta.ok) {
      resetProductsForm();
      toast.success("Producto actualizado correctamente.", configMensaje);
      return <Redirect to='/productos' />
    } else {
      toast.error(respuesta.msg, configMensaje);
    }
  };

  return (
    <Container fluid id='container' className='m-0'>
      <Row>
        <Col id='titulo' className='col-12 mt-6'>
          <h2>Actualizar producto</h2>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row>
          {/*-------------CONTENIDO DEL FORMULARIO ---------------*/}
          <Col id='contenido_form' className='col-12'>
            <Row>
              <Col id='col-izquierda' className='xs-12 sm-12 md-12 lg-12'>
                <Row>
                  <Col>
                    <Form.Group className='mb-3' controlId='grupo_email'>
                      <Form.Label>Identificador del producto:</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Ingrese el identificador del producto'
                        value={codigo_producto}
                        name='codigo_producto'
                        readOnly></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col id='col-cent' className='xs-12 sm-12 md-12 lg-12'>
                <Row>
                  <Col>
                    <Form.Group className='mb-3' controlId='grupo_nombre'>
                      <Form.Label>Descripción:</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Descripción del producto'
                        value={nombre_producto}
                        name='nombre_producto'
                        onChange={handleProductsInputChange}></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Estado:</Form.Label>
                    <Form.Select
                      aria-label='Default select example'
                      name='estado'
                      value={estado}
                      onChange={handleProductsInputChange}>
                      <option value='Disponible'>Disponible</option>
                      <option value='No Disponible'>No disponible</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
              <Col id='col-derecha' className='xs-12 sm-12 md-12 lg-12'>
                <Row>
                  <Col>
                    <Form.Group className='mb-3' controlId='grupo_rol'>
                      <Form.Label>Precio:</Form.Label>
                      <Form.Control
                        type='number'
                        placeholder='Precio'
                        value={precio_unitario}
                        name='precio_unitario'
                        onChange={handleProductsInputChange}></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col col={6} id='col-actu' className='d-flex justify-content-end'>
                <Button type='submit' id='boton_actualizar'>
                  Actualizar producto
                </Button>
              </Col>
              <Col
                col={6}
                id='col-cancel'
                className='d-flex justify-content-start'>
                <Button type="submit" id='boton_cancelar' p-10>
                  Cancelar
                </Button>
              </Col>
            </Row>
          </Col>
          {/* --------------------------------------------------------- */}
        </Row>
      </Form>
      <ToastContainer theme='dark' />
    </Container>
  );
};

export default ProductosEditar;
