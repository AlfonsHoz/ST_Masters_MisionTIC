import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import EditarVentas from "../../components/ventas/editar/EditarVentas";

const VentasPage = () => {
  return (
    <>
      <Navbar />
      <Header
        textoBoton={"Consultar ventas"}
        texto={"ventas"}
        link={"/ventas"}
      />
      <EditarVentas />
    </>
  );
};

export default VentasPage;
