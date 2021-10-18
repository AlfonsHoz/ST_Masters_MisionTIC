import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { axiosPetition, respuesta } from "../helper/fetch";
import { Link } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const {
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    getAccessTokenSilently,
  } = useAuth0();

  const manageUser = async () => {
    const userEmail = user.email;
    await axiosPetition(`usuarios/${userEmail}`);
    if (respuesta.usuario != null) {
      console.log(respuesta, userEmail);
    } else {
      const newUser = {
        email: user.email,
        nombre: user.name,
        rol: "pendiente",
        estado: "inactivo",
      };
      console.log(newUser);
      await axiosPetition(`usuarios`, newUser, "POST");
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
    }
  }, [isAuthenticated]);

  if (isLoading) return <div>Loading...</div>;

  if (!isAuthenticated) {
    return "https://stmasters.herokuapp.com/";
  }

  return <>{children}</>;
};

export default PrivateRoute;
