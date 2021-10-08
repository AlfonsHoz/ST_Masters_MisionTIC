import React, { useEffect, useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import "../styles/listadoproducto.css";
import Productos from "./Productos";
import { useProductosContext } from '../context/productosContext';
import axios from 'axios';

const ListadoProductos = () => {

  const [data, setdata] = useState([]);
  const [ok, setok] = useState(false);
  const { productosConsultar } = useProductosContext();

  useEffect(() => {
    const fetchData = async id => {
      try {
        const apiData = await axios.get(
          `http://localhost:3001/producto`
        );
        setok(apiData.data.ok)
        setdata(apiData.data.productos)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(1);
  }, []);


  return (
    <Container fluid id="content-tbl-prod">
      <Row className="mb-4">
        <Col>
          <h2 id="titulo-consultar-producto">Listado productos</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table id="tabla-productos-registrados" striped hover variant="dark" className="text-center">
            <thead>
              <tr>
                <th>Identificador</th>
                <th>Descripción</th>
                <th>Precio Unitario</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map((datos, key) => {
                if (productosConsultar) {
                  return datos.codigo_producto === 'PN0001' ? <Productos props={datos} /> : ``;
                } else {
                  return <Productos key={key} props={datos} />;
                }
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default ListadoProductos;

