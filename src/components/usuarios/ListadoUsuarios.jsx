import React, { useEffect, useState } from "react";
import "../../styles/listadoUsuarios.css";
import { TablaUsuarios } from "./TablaUsuarios";
import { Table } from "react-bootstrap";
import { useConsultarUsuarioContext } from "../../context/consultarUsuarioContext";
import { toast } from "react-toastify";
import { axiosPetition, respuesta } from "../../helper/fetch";

export const ListadoUsuarios = () => {
  const { consultaUsuario } = useConsultarUsuarioContext();
  const { busqueda, rol } = consultaUsuario;
  const [data, setData] = useState([]);

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

  useEffect(async () => {
    await axiosPetition("usuarios");
    setData(respuesta.usuarios);
    if (!respuesta.ok) {
      toast.error(
        "Ha ocurrido un error al intentar obtener la lista de productos.",
        configMensaje
      );
    }
  }, []);

  return (
    <div id='contenedorListadoUsuarios'>
      <h2 id='tituloListadoUsuarios'>Listado de usuarios</h2>
      <div id='tablaUsuarios'>
        <Table
          id='tabla-usuarios-registrados'
          striped
          hover
          variant='dark'
          className='text-center'>
          <thead>
            <tr>
              <th>Email</th>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((datos, key) => {
              if (busqueda !== "" && busqueda != undefined) {
                if (rol === "todos" && busqueda != undefined) {
                  return datos.identificacion.toString() === busqueda ||
                    datos.nombre === busqueda ? (
                    <TablaUsuarios key={datos._id} props={datos} />
                  ) : (
                    ``
                  );
                } else {
                  return (datos.identificacion.toString() === busqueda &&
                    datos.rol === rol) ||
                    (datos.nombre === busqueda && datos.rol === rol) ? (
                    <TablaUsuarios key={datos._id} props={datos} />
                  ) : (
                    ``
                  );
                }
              } else {
                if (rol !== "" && rol != undefined && rol !== "todos") {
                  return datos.rol === rol ? (
                    <TablaUsuarios key={datos._id} props={datos} />
                  ) : (
                    ``
                  );
                } else {
                  return <TablaUsuarios key={datos._id} props={datos} />;
                }
              }
            })}
          </tbody>
        </Table>
        <span id='volver'>Volver arriba</span>
      </div>
    </div>
  );
};

export default ListadoUsuarios;
