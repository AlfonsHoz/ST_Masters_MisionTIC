import React, { useState, useEffect, useRef } from "react";
import "../styles/registrousuarios.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "../hooks/useForm";
import { axiosPetition, respuesta } from '../helper/fetch';

const RegistroUsuarios = () => {

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

  const [formUsuariosValues, handleUsuariosInputChange, resetUsuariosForm] = useForm({
    identificacion: '',
    nombre: '',
    rol: '',
    estado: 'Pendiente',
    password: ''
  });

  const { identificacion, nombre, rol, estado, password } = formUsuariosValues;

  const handleSubmit = async (e) => {

    e.preventDefault();

    await axiosPetition('usuarios', formUsuariosValues, 'POST');

    if (respuesta.ok) {
      resetUsuariosForm();
      toast.success('Usuario registrado correctamente.', configMensaje);
    } else {
      toast.error(respuesta.msg, configMensaje);
    }
  }

  return (
    <>
      <div id='reg-usr-container'>
        <h3>Registrar usuario</h3>
        <form action='' onSubmit={handleSubmit}>
          <div className='form-reg-usrs'>
            <label className='lbl-reg-usr'>
              Identificador: <br />
              <input
                id='refId'
                className='text-field'
                type='text'
                placeholder='Identificación del usuario'
                name='identificacion'
                value={identificacion}
                onChange={handleUsuariosInputChange}
                autoComplete='off'
                required
              />
            </label>
            <label className='lbl-reg-usr'>
              Nombre: <br />
              <input
                className='text-field'
                type='text'
                placeholder='Ingresa el nombre'
                name='nombre'
                value={nombre}
                onChange={handleUsuariosInputChange}
                autoComplete='off'
                required
              />
            </label>
            <label className='lbl-reg-usr'>
              Rol: <br />
              <select name='rol' value={rol} onChange={handleUsuariosInputChange} id='selector-rol' required>
                <option value='Vendedor'>Vendedor</option>
                <option value='Administrador'>Administrador</option>
                <option value='Operario'>Operario</option>
              </select>
            </label>
          </div>
          <div className='form-reg-usrs'>
            <label className='lbl-reg-usr'>
              Estado:
              <input
                type='text'
                disabled
                className='text-field'
                value={estado}
                name='estado'
                required
              />
            </label>
            <label className='lbl-reg-usr'>
              Contraseña: <br />
              <input
                className='text-field'
                type='password'
                placeholder='Ingresa la contraseña'
                name='password'
                value={password}
                onChange={handleUsuariosInputChange}
                autoComplete='off'
                required
              />
            </label>
            {
              // label vacio para arreglar el espacio en blanco.
            }
            <label className='lbl-reg-usr'></label>
          </div>
          <div id='bottom-btns-container'>
            <button type='submit' id='btn-registrar'>
              Registar usuario
            </button>
            <button id='btn-limpiar'>
              Limpiar
            </button>
          </div>
        </form>
        <ToastContainer theme='dark' />
      </div>
    </>
  );
};

export default RegistroUsuarios;
