import React from "react";
import NavBar from "./Navbar";
import "../styles/unauthorized.css";

const Unauthorized = () => {
  return (
    <>
      <NavBar />
      <div className='title-unau'>
        <h1>Usted no esta autorizado, contacte a un administrador</h1>
      </div>
    </>
  );
};

export default Unauthorized;
