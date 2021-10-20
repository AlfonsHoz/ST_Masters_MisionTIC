import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import "../../styles/editar_usuarios.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUsuariosEditarContext } from "../../context/editarusuarioContext";
import { RolContext } from "../../context/rolContext";
import { useForm } from "../../hooks/useForm";
import { axiosPetition, respuesta } from "../../helper/fetch";

const EditarUsuarios = () => {
  const { usuariosEditar } = useUsuariosEditarContext();
  const { setRolGlobal } = useRolContext();

  const [formUsuariosValues, handleUsuariosInputChange, resetUsuariosForm] =
    useForm({
      email: usuariosEditar.email,
      nombre: usuariosEditar.nombre,
      rol: usuariosEditar.rol,
      estado: usuariosEditar.estado,
    });

  const { email, nombre, rol, estado } = formUsuariosValues;

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

    await axiosPetition(
      `usuarios/${usuariosEditar.email}`,
      formUsuariosValues,
      "PUT"
    );

    if (respuesta.ok) {
      toast.success("Usuario actualizado correctamente.", configMensaje);
      setRolGlobal(respuesta.usuario.rol);
    } else {
      toast.error(respuesta.msg, configMensaje);
    }
  };

  return (
    <Container fluid id='container' className='m-0'>
      <Row>
        <Col id='titulo' className='col-12 mt-6'>
          <h2 id='titulo-actualizar-usuario'>Actualizar usuario</h2>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col id='contenido_form' className='col-12'>
            <Row>
              <Col id='col-izquierda' className='xs-12 sm-12 md-12 lg-12'>
                <Row>
                  <Col>
                    <Form.Group className='mb-3' controlId='grupo_email'>
                      <Form.Label>Email:</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='Correo electrónico'
                        name='email'
                        value={email}
                        readOnly></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className='mb-3' controlId='grupo_email'>
                      <Form.Label>Estado:</Form.Label>
                      <Form.Select
                        aria-label='Default select example'
                        name='estado'
                        value={estado}
                        onChange={handleUsuariosInputChange}>
                        <option>Seleccione...</option>
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
                        type='text'
                        placeholder='Nombre usuario'
                        name='nombre'
                        value={nombre}
                        onChange={handleUsuariosInputChange}></Form.Control>
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
                        aria-label='Default select example'
                        name='rol'
                        value={rol}
                        onChange={handleUsuariosInputChange}>
                        <option>Seleccione</option>
                        <option value='pendiente'>Pendiente</option>
                        <option value='Vendedor'>Vendedor</option>
                        <option value='Admin'>Administrador</option>
                      </Form.Select>
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
                  type='submit'>
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
