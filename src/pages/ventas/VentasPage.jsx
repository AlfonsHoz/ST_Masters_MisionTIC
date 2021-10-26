import React, { useState, Suspense } from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import ConsultarVentas from "../../components/ventas/consultar/ConsultarVentas";
import TablaVentas from "../../components/ventas/consultar/TablaVentas";
import { ConsultarVentaContext } from "../../context/consultarVentaContext";
import Loading from "../../components/Loading";
import { useRolContext } from "../context/rolContext";
import { useAuth0 } from "@auth0/auth0-react";
import { axiosPetition, respuesta } from "../../helper/fetch";

const VentasPage = () => {
  const [consultaVenta, setConsultaVenta] = useState("");
  const { setRolGlobal } = useRolContext();
  const { user } = useAuth0();

  useEffect(() => {
    await axiosPetition(`usuarios/${user.email}`);
    setRolGlobal(respuesta.rol);
  }, []);

  return (
    <>
      <Navbar />
      <Header
        textoBoton={"Nueva venta"}
        texto={"ventas"}
        link={"/ventas/registrar"}
      />
      <ConsultarVentaContext.Provider
        value={{ consultaVenta, setConsultaVenta }}>
        <ConsultarVentas />
        <TablaVentas />
      </ConsultarVentaContext.Provider>
    </>
  );
};

export default VentasPage;
