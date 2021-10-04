import React, { useState, useRef, useEffect } from 'react'
import '../styles/editarventas.css'
import ProdsEditVent from './ProdsEditVent'

const EditarVentas = () => {

  const [data, setdata] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/AlfonsHoz/jsonprueba/db')
      .then(response => response.json())
      .then(dat => setdata(dat.ventas));
  }, [])


  const [producto, setProducto] = useState({})
  const [productos, setProductos] = useState({})
  const [cantidad, setCantidad] = useState({})

  const refProd = useRef()
  const refCant = useRef()

  const updateVenta = () => {
    alert('Se ha actualizado la venta')
  }

  useEffect(() => {
    refProd.current.focus();
    refCant.current.focus();
    setProducto(refProd)
    setCantidad(refCant)
  }, [])

  return (
    <div id="EditarVentas">
      <div>
        <h2 id="act-ven">Actualizar ventas </h2>
        <label id="cod-ven">Código venta <br />
          <p></p>
        </label>
        <label id="id-ven">ID Vendedor: <br />
          <input type="number" placeholder="Ingrese el id"></input>
        </label>
        <label>Nombre vendedor: <br />
          <input type="text" placeholder="Ingrese el nombre"></input>
        </label>
      </div>
      <div>
        <label >Producto: <br />
          <input ref={refProd} type="text" id="" placeholder="Ingresa el código o nombre" />
        </label>
        <label>Cantidad: <br />
          <input ref={refCant} type="number" id="" placeholder="Ingresa la cantidad" />
        </label>
        <button type="submit"> Agregar producto </button>
      </div>
      <div>

        {data.map((x, key) => {
          if (x.codigo === "V0001") return x.productos.map((y, key) => <ProdsEditVent key={key} props={y} />);
        })}

        <button onClick={updateVenta} type="submit" className="boton-generico-header" id="boton-editar-ventas">Actualizar</button>
      </div>

    </div >
  )
}

export default EditarVentas
