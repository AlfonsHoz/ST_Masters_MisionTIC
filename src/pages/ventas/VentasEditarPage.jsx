import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import EditarVentas from "../../components/EditarVentas";
import Listadoventas from "../../components/Listadoventas";

const VentasPage = () => {
  return (
    <>
      <Navbar />
      <Header
        textoBoton={"Consultar ventas"}
        texto={"ventas"}
        link={"/ventas/consultar"}
      />
      <EditarVentas />
      <Listadoventas />
    </>
  );
};

export default VentasPage;
