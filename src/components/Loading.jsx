import React from "react";
import NavBar from "./Navbar";
import "../styles/unauthorized.css";

const Loading = () => {
  return (
    <>
      <NavBar />
      <div className='title-unau'>
        <h1>Cargando...</h1>
      </div>
    </>
  );
};

export default Loading;
