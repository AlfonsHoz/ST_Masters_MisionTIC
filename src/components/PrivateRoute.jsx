import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { axiosPetition, respuesta } from "../helper/fetch";
import { useRolContext } from "../context/rolContext";
import Loading from "./Loading";

const PrivateRoute = ({ children }) => {
  const { setRolGlobal } = useRolContext();

  const { getAccessTokenSilently, user, isAuthenticated, isLoading  } =
    useAuth0();

  const [userData, setUserData] = useState({})

  const manageUser = async () => {
    const userEmail = user.email;
    await axiosPetition(`usuarios/${userEmail}`);
    if (respuesta.usuario != null) {
      setUserData(respuesta.usuario);
      setRolGlobal(respuesta.usuario.rol);
      console.log(respuesta.usuario)
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
      localStorage.setItem("token", accessToken);
    };
    if (isAuthenticated) {
      manageUser();
      fetchAuth0Token();

    }
    if (isLoading) return <div>Loading...</div>;
  }, [isAuthenticated, getAccessTokenSilently, userData]);
console.log(isAuthenticated)
  if (!isAuthenticated) {
    return "https://stmasters.herokuapp.com/";
  }

  return <>{isLoading ? <Loading /> : children}</>;
};

export default PrivateRoute;
