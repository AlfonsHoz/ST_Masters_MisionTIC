import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import ConsultarVentas from "../../components/ventas/consultar/ConsultarVentas";
import TablaVentas from "../../components/ventas/consultar/TablaVentas";
import { ConsultarVentaContext } from "../../context/consultarVentaContext";
import Loading from "../../components/Loading";

const VentasPage = () => {
  const [consultaVenta, setConsultaVenta] = useState("");

  return (
    <>
      <Navbar />
      <Header
        textoBoton={"Nueva venta"}
        texto={"ventas"}
        link={"/ventas/registrar"}
      />
      <ConsultarVentaContext.Provider
        value={{ consultaVenta, setConsultaVenta }}>
        <ConsultarVentas />
        <TablaVentas />
      </ConsultarVentaContext.Provider>
    </>
  );
};

export default VentasPage;
