import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { axiosPetition, respuesta } from "../helper/fetch";
import { useRolContext } from "../context/rolContext";

const PrivateRoute = ({ children }) => {
  const { setRolGlobal } = useRolContext();

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
      console.log(newUser);
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
      fetchAuth0Token();
      manageUser();
      window.location.reload();
    }
  }, [isAuthenticated]);

  if (isLoading) return <div>Loading...</div>;

  if (!isAuthenticated) {
    return "https://stmasters.herokuapp.com/";
  }

  return <>{children}</>;
};

export default PrivateRoute;
