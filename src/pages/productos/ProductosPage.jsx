
import NavBar from "../../components/Navbar";
import Header from "../../components/Header";
import ConsultarProducto from "../../components/productos/ConsultarProducto";
import ListadoProductos from "../../components/productos/TablaProductos";
import { ConsultarProductoContext } from '../../context/consultarProductoContext';
import { useState } from "react";

const ProductosPage = () => {

  const [consultaProducto, setConsultaProducto] = useState('');

  return (
    <>
      <ConsultarProductoContext.Provider value={{ consultaProducto, setConsultaProducto }}>
        <NavBar />
        <Header
          textoBoton={"Nuevo producto"}
          texto={"productos"}
          link={"/productos/registrar"}
        />
        <ConsultarProducto />
        <ListadoProductos />
      </ConsultarProductoContext.Provider>
    </>
  );
};

export default ProductosPage;