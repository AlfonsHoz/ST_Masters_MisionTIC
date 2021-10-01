import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import ConsultarProducto from "../../components/ConsultarProducto";

const VentasPage = () => {
  return (
    <>
      <Navbar />
      <Header
        textoBoton={"Nueva venta"}
        texto={"ventas"}
        link={"/ventas/registrar"}
      />
      <ConsultarProducto />
    </>
  );
};

export default VentasPage;
