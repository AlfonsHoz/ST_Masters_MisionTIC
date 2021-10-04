import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { EditarProductos } from "../../components/EditarProductos";

const ProductosPage = () => {
  return (
    <>
      <Navbar />
      <Header
        textoBoton={"Consultar productos"}
        texto={"productos"}
        link={"/ventas/consultar"}
      />
      <EditarProductos />
    </>
  );
};

export default ProductosPage;
