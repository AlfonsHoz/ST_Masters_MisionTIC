import React from "react";
import Header from "../../components/Header";
import NavBar from "../../components/Navbar";
import { RegistrarProducto } from "../../components/RegistrarProducto";

const ProductosRegistrarPage = () => {
  return (
    <>
      <NavBar />
      <Header
        textoBoton="Consultar Productos"
        texto="productos"
        link="/productos/"
      />
      <RegistrarProducto />
    </>
  );
};

export default ProductosRegistrarPage;
