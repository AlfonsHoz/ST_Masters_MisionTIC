import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import ConsultarProducto from "../../components/ConsultarProducto";
import { useConsultarProductoContext } from "../../context/consultarProductoContext";
import PrivateRoute from "../../components/PrivateRoute";
import { useRolContext } from "../context/rolContext";
import { useAuth0 } from "@auth0/auth0-react";
import { axiosPetition, respuesta } from "../../helper/fetch";

const VentasPage = () => {
  const { setRolGlobal } = useRolContext();
  const { user } = useAuth0();

  useEffect(() => {
    await axiosPetition(`usuarios/${user.email}`);
    setRolGlobal(respuesta.rol);
  }, []);

  return (
    <>
      <useConsultarProductoContext.Provider
        values={{ consultarProducto, setConsultarProducto }}>
        <Navbar />
        <Header
          textoBoton={"Nueva venta"}
          texto={"ventas"}
          link={"/ventas/registrar"}
        />
        <ConsultarProducto />
      </useConsultarProductoContext.Provider>
    </>
  );
};

export default VentasPage;
