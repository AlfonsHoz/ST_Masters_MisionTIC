import React, { useState, useEffect, useRef } from "react";
import "../styles/registrousuarios.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const RegistroUsuarios = () => {
  const [id, setId] = useState({});
  const idRef = useRef();

  const [name, setName] = useState({});
  const nameRef = useRef();

  const [rol, setRol] = useState({});
  const rolRef = useRef();

  const [pass, setPass] = useState({});
  const passRef = useRef();

  useEffect(() => {
    idRef.current.focus();
    setId(idRef.current);
    nameRef.current.focus();
    setName(nameRef.current);
    rolRef.current.focus();
    setRol(rolRef.current);
    passRef.current.focus();
    setPass(passRef.current);
  }, []);

  const cleanUpTextFields = () => {
    id.value = "";
    name.value = "";
    rol.value = "vendedor";
    pass.value = "";
  };

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

  const mostrarMensaje = (e) => {
    try {
      e.preventDefault();
      if (!(id.value === "" || name.value === "" || pass.value === "")) {
        axios
          .post(`http://localhost:3001/usuarios`, {
            identificacion: parseInt(id.value),
            nombre: name.value,
            rol: rol.value,
            estado: "activo",
            password: pass.value,
          })
          .then(function (response) {
            console.log(response.data);
            if (response.data.ok) {
              toast.success("Usuario registrado correctamente!", configMensaje);
              cleanUpTextFields();
            }
          })
          .catch(function (error) {
            if (error.response) {
              const errores = error.response.data;
              console.log(errores);
              toast.error(error.response.data.errores.msg, configMensaje);
            } else if (error.request) {
              // console.log(error.request);
            } else {
              // console.log("Error", error.message);
            }
            // console.log(error.config);
          });
        e.preventDefault();
      } else {
        toast.error("Llene todos los campos!", configMensaje);
      }
    } catch (err) {}
  };

  return (
    <>
      <div id="reg-usr-container">
        <h3>Registrar usuario</h3>
        <form action="">
          <div className="form-reg-usrs">
            <label className="lbl-reg-usr">
              Identificador: <br />
              <input
                id="refId"
                ref={idRef}
                className="text-field"
                type="text"
                placeholder="Identificación del usuario"
              />{" "}
            </label>
            <label className="lbl-reg-usr">
              Nombre: <br />
              <input
                ref={nameRef}
                className="text-field"
                type="text"
                placeholder="Ingresa el nombre"
              />
            </label>
            <label className="lbl-reg-usr">
              Rol: <br />
              <select ref={rolRef} name="rol" id="selector-rol">
                <option value="vendedor">Vendedor</option>
                <option value="admin">Administrador</option>
              </select>
            </label>
          </div>
          <div className="form-reg-usrs">
            <label className="lbl-reg-usr">
              Estado:
              <input
                type="text"
                disabled
                className="text-field"
                value="Activo"
              />
            </label>
            <label className="lbl-reg-usr">
              Contraseña: <br />
              <input
                ref={passRef}
                className="text-field"
                type="password"
                placeholder="Ingresa la contraseña"
              />
            </label>
            {
              // label vacio para arreglar el espacio en blanco.
            }
            <label className="lbl-reg-usr"></label>
          </div>
          <div id="bottom-btns-container">
            <button type="button" onClick={mostrarMensaje} id="btn-registrar">
              Registar usuario
            </button>
            <button id="btn-limpiar" onClick={cleanUpTextFields}>
              Limpiar
            </button>
          </div>
        </form>
        <ToastContainer theme="dark" />
      </div>
    </>
  );
};

export default RegistroUsuarios;
