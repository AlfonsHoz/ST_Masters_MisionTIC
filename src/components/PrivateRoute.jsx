import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({children}) => {
    const { isAuthenticated, isLoading } = useAuth0();

    if(isLoading) return <div>Loading....</div>

    return isAuthenticated ? <>{children}</> : <div className= "text-6xl" >No estás autorizado para ver este sitio.</div>
};

export default PrivateRoute;