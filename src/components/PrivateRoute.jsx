import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { axiosPetition, respuesta } from "../helper/fetch";
import { useRolContext } from "../context/rolContext";
import Loading from "./Loading";
import Unauthorized from "../components/Unauthorized";

const PrivateRoute = ({ children }) => {
  const { setRolGlobal } = useRolContext();
  const [token, setToken] = useState(undefined);
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  useEffect(() => {

    const fetchAuth0Token = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: "api-autenticacion-st-masters",
      });
      localStorage.setItem("token", accessToken);
      setToken(accessToken);

      if (localStorage.getItem('token') !== '' || localStorage.getItem('token') !== undefined || localStorage.getItem('token') !== null) {
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
      }
    };

    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  if (isLoading) return <div>Loading...</div>;

  if (isAuthenticated && token != undefined) {
    return <>{isLoading ? <Loading /> : children}</>;
  }

  return "https://stmasters.herokuapp.com/";
};

export default PrivateRoute;
