import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import ConsultarProducto from "../../components/ConsultarProducto";
import { useConsultarProductoContext } from "../../context/consultarProductoContext";

const VentasPage = () => {
  return (
    <>
      <useConsultarProductoContext.Provider values={{ consultarProducto, setConsultarProducto }}>
        <Navbar />
        <Header
          textoBoton={"Nueva venta"}
          texto={"ventas"}
          link={"/ventas/registrar"}
        />
        <ConsultarProducto />
      </useConsultarProductoContext.Provider>
    </>
  );
};

export default VentasPage;
