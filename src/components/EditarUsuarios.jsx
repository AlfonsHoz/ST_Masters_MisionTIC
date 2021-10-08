import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import "../styles/editar_usuarios.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUsuariosEditarContext } from "../context/editarusuarioContext";
import axios from "axios";
import { useRef } from "react";

const EditarUsuarios = () => {
  const { usuariosEditar } = useUsuariosEditarContext();
  const [data, setdata] = useState({});
  const [ok, setok] = useState(true);
  const [loader, setLoader] = useState(true);

  const [idUs, setidUs] = useState({});
  const [nombreUs, setnombreUs] = useState({});
  const [rolUs, setrolUs] = useState({});
  const [estadoUs, setestadoUs] = useState({});
  const [pass1, setpass1] = useState({});
  const [passRepeated, setpassRepeated] = useState({});

  const refId = useRef();
  const refNombre = useRef();
  const refEstado = useRef();
  const refRol = useRef();
  const refpass1 = useRef();
  const refpassRepeated = useRef();

  useEffect(() => {
    refId.current.focus();
    setidUs(refId.current);
    refNombre.current.focus();
    setnombreUs(refNombre.current);
    refRol.current.focus();
    setrolUs(refRol.current.value);
    refEstado.current.focus();
    setestadoUs(refEstado.current.value);
    refpass1.current.focus();
    setpass1(refpass1.current);
    refpassRepeated.current.focus();
    setpassRepeated(refpassRepeated.current);
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await axios.get(
          `http://localhost:3001/usuarios/${usuariosEditar.identificacion}`
        );
        setdata(apiData.data.usuario);
      } catch (error) {
        console.log(error);
      }
      updateStates();
    };
    fetchData(1);
    setLoader(false);
  }, []);

  const { identificacion, nombre, estado, rol, password } = data;

  const configMensaje = {
    position: "bottom-center",
    background: "#191c1f !important",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const updateStates = () => {
    setpass1(() => {
      if (pass1.value === "") {
        setok(false);
      } else if (pass1.value === passRepeated.value && pass1.value !== "") {
        setok(true);
      }
    });
    if (ok) {
      user = {
        identificacion:
          idUs.value === "" ? identificacion : parseInt(idUs.value),
        nombre: nombreUs.value === "" ? nombre : nombreUs.value,
        rol: rolUs,
        estado: estadoUs === "activo" ? estado : estadoUs,
        password: pass1.value,
      };
    } else {
      user = {
        identificacion:
          idUs.value === "" ? identificacion : parseInt(idUs.value),
        nombre: nombreUs.value === "" ? nombre : nombreUs.value,
        rol: rolUs,
        estado: estadoUs === "activo" ? estado : estadoUs,
        password: password,
      };
    }
  };

  let user = {};

  const mostrarMensaje = () => {
    if (pass1.value === "" || pass1.value === passRepeated.value) {
      updateStates();
      console.log(user);
      axios.put(
        `http://localhost:3001/usuarios/${usuariosEditar.identificacion}`,
        user
      );
      toast.success("Usuario actualizado correctamente!", configMensaje);
    } else {
      toast.error("Llene todos los campos!", configMensaje);
    }
  };

  //const { identificacion, nombre, rol, estado } = data;

  return (
    <Container fluid id='container' className='m-0'>
      <Row>
        <Col id='titulo' className='col-12 mt-6'>
          <h2 id='titulo-actualizar-usuario'>Actualizar usuario</h2>
        </Col>
      </Row>
      <Form>
        <Row>
          <Col id='contenido_form' className='col-12'>
            <Row>
              <Col id='col-izquierda' className='xs-12 sm-12 md-12 lg-12'>
                <Row>
                  <Col>
                    <Form.Group className='mb-3' controlId='grupo_email'>
                      <Form.Label>Identificador:</Form.Label>
                      <Form.Control
                        ref={refId}
                        type='text'
                        placeholder={identificacion}></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className='mb-3' controlId='grupo_email'>
                      <Form.Label>Estado:</Form.Label>
                      <Form.Select
                        ref={refEstado}
                        aria-label='Default select example'>
                        <option value='activo'>Activo</option>
                        <option value='inactivo'>Inactivo</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col id='col-cent' className='xs-12 sm-12 md-12 lg-12'>
                <Row>
                  <Col>
                    <Form.Group className='mb-3' controlId='grupo_nombre'>
                      <Form.Label>Nombre:</Form.Label>
                      <Form.Control
                        ref={refNombre}
                        type='text'
                        placeholder={nombre}></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className='mb-3' controlId='grupo_contraseña'>
                      <Form.Label>Contraseña:</Form.Label>
                      <Form.Control
                        ref={refpass1}
                        type='password'
                        placeholder='Contraseña'></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
              <Col id='col-derecha' className='xs-12 sm-12 md-12 lg-12'>
                <Row>
                  <Col>
                    <Form.Group className='mb-3' controlId='grupo_rol'>
                      <Form.Label>Rol:</Form.Label>
                      <Form.Select
                        ref={refRol}
                        aria-label='Default select example'>
                        <option value='vendedor'>Vendedor</option>
                        <option value='admin'>Administrador</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className='mb-3' controlId='grupo_contra_new'>
                      <Form.Label>Contraseña nueva:</Form.Label>
                      <Form.Control
                        ref={refpassRepeated}
                        type='password'
                        placeholder='Contraseña'></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col col={6} id='col-actu' className='d-flex justify-content-end'>
                <Button
                  className='cursor-pointer'
                  id='boton_actualizar'
                  onClick={mostrarMensaje}>
                  Actualizar usuario
                </Button>
              </Col>
              <Col
                col={6}
                id='col-cancel'
                className='d-flex justify-content-start'>
                <Link id='link' to='/usuarios'>
                  <Button className='cursor-pointer' id='boton_cancelar' p-10>
                    Cancelar
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
      <ToastContainer theme='dark' />
    </Container>
  );
};

export default EditarUsuarios;
