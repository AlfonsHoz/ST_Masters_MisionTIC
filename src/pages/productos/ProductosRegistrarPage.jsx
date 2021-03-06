import React from "react";
import Header from "../../components/Header";
import NavBar from "../../components/Navbar";
import { RegistrarProducto } from "../../components/productos/RegistrarProducto";

const ProductosRegistrarPage = () => {
  return (
    <>
      <NavBar />
      <Header
        textoBoton="Consultar productos"
        texto="productos"
        link="/productos/"
      />
      <RegistrarProducto />
    </>
  );
};

export default ProductosRegistrarPage;