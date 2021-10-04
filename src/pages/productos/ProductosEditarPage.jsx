import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { EditarProductos } from "../../components/EditarProductos";
import ListadoProductos from "../../components/Listadoproductos";

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
      <ListadoProductos />
    </>
  );
};

export default ProductosPage;
