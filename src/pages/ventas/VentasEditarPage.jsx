import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { axiosPetition, respuesta } from '../../helper/fetch';
import { EditarVentas } from "../../components/ventas/editar/EditarVentas";
import { EditarVentaContext } from '../../context/editarVentaContext';
import { useVentasContext } from "../../context/ventasContext";
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const VentasPage = () => {

  const { ventasEditar } = useVentasContext();

  const [editarVenta, setEditarVenta] = useState({
    fecha_venta: '',
    codigo: '',
    total: 0,
    id_vendedor: '',
    vendedor: '',
    id_cliente: '',
    cliente: '',
    estado: 'En Proceso',
    productos: []
  });

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

  useEffect(() => {
    const buscarVenta = async () => {
      await axiosPetition(`ventas/${ventasEditar}`);
      try {
        if (respuesta.ok) {
          setEditarVenta({
            fecha_venta: respuesta.venta.fecha_venta,
            codigo: respuesta.venta.codigo,
            total: respuesta.venta.total,
            id_vendedor: respuesta.venta.id_vendedor,
            vendedor: respuesta.venta.vendedor,
            id_cliente: respuesta.venta.id_cliente,
            cliente: respuesta.venta.cliente,
            estado: respuesta.venta.estado,
            productos: respuesta.venta.productos
          });
        }
      } catch (err) {
        toast.error('Selecciona una venta primero, por favor.', configMensaje);
      }
    }
    buscarVenta();
  }, []);

  return (
    <>
      <Navbar />
      <Header
        textoBoton={"Consultar ventas"}
        texto={"ventas"}
        link={"/ventas"}
      />
      <EditarVentaContext.Provider value={{ editarVenta, setEditarVenta }}>
        <EditarVentas configMensaje={configMensaje} />
      </EditarVentaContext.Provider>
    </>
  );
};

export default VentasPage;
