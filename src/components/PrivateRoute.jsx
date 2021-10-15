import React, { useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchAuth0Token = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: 'api-autenticacion-st-masters',
    });
    console.log(accessToken);
  };

    fetchAuth0Token();
  }, [])
  
  if(isLoading) return <div>Loading...</div>

  if (!isAuthenticated) {
    return "http://localhost:3000";
  }

  return <>{children}</>;

  // return isAuthenticated ? (
  // <>{children}</>) : (
  // <div><div className="text-9xl">No estás autorizado para ver este sitio.</div>
  // <Link to="\">
  //   <span className="text-blue-500-font-bold">Llevame al home</span>
  // </Link>
  // </div>
  // )
};


export default PrivateRoute;