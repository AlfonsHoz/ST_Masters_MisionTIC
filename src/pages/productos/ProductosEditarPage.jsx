import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import EditarVentas from "../../components/EditarVentas";

const ProductosPage = () => {
  return (
    <>
      <Navbar />
      <Header
        textoBoton={"Consultar productos"}
        texto={"productos"}
        link={"/ventas/consultar"}
      />
      <EditarVentas />
    </>
  );
};

export default VentasPage;
