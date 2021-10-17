import React from "react";
import { Col, Container, Form, FormGroup, Row, Button } from "react-bootstrap";
<<<<<<< HEAD:src/components/ConsultarProducto.jsx
import "../styles/consultarProducto.css";
import { useProductosContext } from "../context/productosContext";
import { useConsultarProductoContext } from "../context/consultarProductoContext";
import { useForm } from "../hooks/useForm";

const ConsultarProducto = () => {

  const { productosConsultar, setProductosConsultar } = useProductosContext();
  const { setConsultaProducto } = useConsultarProductoContext();

  const [formFindProductsValues, handleFindProductsInputChange, resetFindProductsForm] = useForm({
=======
import "../../styles/consultarProducto.css";
import { useConsultarProductoContext } from "../../context/consultarProductoContext";
import { useForm } from "../../hooks/useForm";

const ConsultarProducto = () => {

  const { setConsultaProducto } = useConsultarProductoContext();

  const [formFindProductsValues, handleFindProductsInputChange] = useForm({
>>>>>>> 00582c7c4575cd10eba15d5a4fb7c9f249d39d05:src/components/productos/ConsultarProducto.jsx
    busqueda: '',
  });

  const { busqueda } = formFindProductsValues;

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
                className="campo-buscar-producto"
                type="text"
                placeholder="Ingresa el codigo o nombre del producto"
                name="busqueda"
                onChange={handleFindProductsInputChange}
                required
                autoComplete='off'
              ></Form.Control>
              <Button type='submit' onClick={(e) => {
                setConsultaProducto(busqueda);
<<<<<<< HEAD:src/components/ConsultarProducto.jsx
                setProductosConsultar(!productosConsultar);
                e.preventDefault();
              }} id="boton-producto" className="boton-generico-header">{
                  busqueda !== '' ?
                    "Todos los productos"
                    :
                    "Consultar"
                }</Button>
=======
                e.preventDefault();
              }} id="boton-producto" className="boton-generico-header">
                Consultar
              </Button>
>>>>>>> 00582c7c4575cd10eba15d5a4fb7c9f249d39d05:src/components/productos/ConsultarProducto.jsx
            </FormGroup>
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
