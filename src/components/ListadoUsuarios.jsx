import React, { useEffect, useState } from "react";
import "../styles/listadoUsuarios.css";
import { TablaUsuarios } from "./TablaUsuarios";
import { Table } from 'react-bootstrap';
import { useUsuariosContext } from '../context/usuariosContext';
import axios from 'axios';

export const ListadoUsuarios = () => {
  const [data, setdata] = useState([]);
  const [ok, setok] = useState(false);
  const { usuariosConsultar } = useUsuariosContext();

  useEffect(() => {
    const fetchData = async id => {
      try {
        const apiData = await axios.get(
          `http://localhost:3001/usuarios`
        );
        setok(apiData.data.ok)
        setdata(apiData.data.usuarios)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(1);
  }, []);

  return (
    <div id="contenedorListadoUsuarios">
      <h2 id="tituloListadoUsuarios">Listado de usuarios</h2>
      <div id="tablaUsuarios">
        <Table id="tabla-usuarios-registrados" striped hover variant="dark" className="text-center">
          <thead>
            <tr>
              <th>Identificación</th>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((datos, key) => {
              if (usuariosConsultar) {
                return datos.identificacion === 1113692937 ? <TablaUsuarios props={datos} /> : ``;
              } else {
                return <TablaUsuarios key={key} props={datos} />;
              }
            })}
          </tbody>
        </Table>
        <span id="volver">Volver arriba</span>
      </div>
    </div>
  );
};

export default ListadoUsuarios;
