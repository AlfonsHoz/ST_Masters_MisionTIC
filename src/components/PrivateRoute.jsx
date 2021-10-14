import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  
  if(isLoading) return <div>Loading...</div>

  if (!isAuthenticated) {
    return loginWithRedirect();
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
