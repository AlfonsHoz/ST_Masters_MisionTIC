import React, { useState, useRef, useEffect } from "react";
import "../styles/editarventas.css";

const EditarVentas = ({ props }) => {
  const [producto, setProducto] = useState({});
  const [cantidad, setCantidad] = useState({});
  const refProd = useRef();
  const refCant = useRef();

  useEffect(() => {
    refProd.current.focus();
    refCant.current.focus();
    setProducto(refProd);
    setCantidad(refCant);
  }, []);

  return (
    <div className="EditarVentas">
      <div>
        <h2 id="act-ven">Actualizar ventas </h2>
        <label id="cod-ven">
          Código venta <br />
          <input
            type="number"
            id="ing-cod"
            placeholder="Ingrese código venta"
          ></input>
          <p></p>
        </label>
        <div id="eti-ID">
          <label id="id-ven">
            ID Vendedor: <br />
            <input
              type="number"
              id="number"
              placeholder="Ingrese el id"
            ></input>
          </label>
        </div>
        <label id="nom-ven">
          Nombre vendedor: <br />
          <input
            type="text"
            id="ingr-nom"
            placeholder="Ingrese el nombre"
          ></input>
        </label>
      </div>
      <div id="botones">
        <label id="prod">
          Producto: <br />
          <input
            ref={refProd}
            type="text"
            id="ingr-prod"
            placeholder="Ingresa el código o nombre"
          />
        </label>
        <label id="cant">
          Cantidad: <br />
          <input
            ref={refCant}
            type="number"
            id="ingr-cant"
            placeholder="Ingresa la cantidad"
          />
        </label>
        <button type="submit" id="agre-prod">
          {" "}
          Agregar producto{" "}
        </button>
      </div>
      <div>
        <button type="submit" className="boton-actualizar">
          Actualizar
        </button>
      </div>
    </div>
  );
};

export default EditarVentas;
