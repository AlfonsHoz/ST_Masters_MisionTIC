import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { axiosPetition, respuesta } from "../helper/fetch";
import { useRolContext } from "../context/rolContext";
import Loading from "./Loading";
import Unauthorized from "./components/Unauthorized";

const PrivateRoute = ({ children }) => {
  const { setRolGlobal } = useRolContext();

  const { getAccessTokenSilently, user, isAuthenticated, isLoading } =
    useAuth0();

  const [userData, setUserData] = useState({});

  const [token, setToken] = useState();

  useEffect(() => {
    const fetchAuth0Token = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: "api-autenticacion-st-masters",
      });
      setToken(accessToken);
      localStorage.setItem("token", accessToken);
    };

    const manageUser = async () => {
      const userEmail = user.email;
      await axiosPetition(`usuarios/${userEmail}`);
      if (respuesta.usuario != null) {
        setUserData(respuesta.usuario);
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

    if (isAuthenticated) {
      fetchAuth0Token();
      manageUser();
      return <>{isLoading ? <Loading /> : children}</>
    }

    return <Unauthorized />

  }, [isAuthenticated, getAccessTokenSilently, userData]);

};

export default PrivateRoute;
