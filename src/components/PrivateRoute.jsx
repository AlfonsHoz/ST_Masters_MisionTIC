import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { axiosPetition, respuesta } from "../helper/fetch";
import { useRolContext } from "../context/rolContext";
import Loading from "./Loading";
import Unauthorized from "../components/Unauthorized";

const PrivateRoute = ({ children }) => {
  const { setRolGlobal } = useRolContext();
  const [token, setToken] = useState('');
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  const manageUser = async () => {
    const userEmail = user.email;
    await axiosPetition(`usuarios/${userEmail}`);
    if (respuesta.usuario != null) {
      setRolGlobal(respuesta.usuario.rol);
    } else {
      const newUser = {
        email: user.email,
        nombre: user.name,
        rol: "pendiente",
        estado: "inactivo",
      };

      await axiosPetition(`usuarios`, newUser, "POST");
      setRolGlobal("pendiente");
    }
  };

  useEffect(() => {
    const fetchAuth0Token = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: "api-autenticacion-st-masters",
      });
      console.log('Access token', accessToken);
      setToken(accessToken);
      localStorage.setItem("token", accessToken);
    };
    if (isAuthenticated) {
      fetchAuth0Token();
      manageUser();
      console.log('Token', token);
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  if (isLoading) return <div>Loading...</div>;

  if (isAuthenticated && token != '') {
    return <>{isLoading ? <Loading /> : children}</>;
  }

  return "https://stmasters.herokuapp.com/";
};

export default PrivateRoute;
