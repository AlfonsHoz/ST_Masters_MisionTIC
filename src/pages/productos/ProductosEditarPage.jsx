import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import EditarProductos from "../../components/EditarProductos";

const ProductosEditarPage = () => {
  return (
    <>
      <Navbar />
      <Header
        textoBoton={"Consultar productos"}
        texto={"productos"}
        link={"/productos"}
      />
      <EditarProductos />
    </>
  );
};

export default ProductosEditarPage;
