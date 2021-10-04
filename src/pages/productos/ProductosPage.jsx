import React from "react";
import NavBar from "../../components/Navbar";
import Header from "../../components/Header";
import ConsultarProducto from "../../components/ConsultarProducto";
import ListadoProductos from "../../components/Listadoproductos";

const ProductosPage = () => {
  return (
    <>
      <NavBar />
      <Header
        textoBoton={"Nuevo producto"}
        texto={"productos"}
        link={"/productos/consultar"}
      />
      <ConsultarProducto />
      <ListadoProductos />
    </>
  );
};

export default ProductosPage;
