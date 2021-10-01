import React, { useState, useRef, useEffect } from 'react'
import Productos from './Productos'
import '../styles/editarventas.css'

const EditarVentas = () => {


  const [producto, setProducto] = useState({})
  const [productos, setProductos] = useState({})
  const [cantidad, setCantidad] = useState({})

  const refProd = useRef()
  const refCant = useRef()

  const updateVenta = () => {
    alert('Se ha actualizado el producto')
  }

  useEffect(() => {
    refProd.current.focus();
    refCant.current.focus();
    setProducto(refProd)
    setCantidad(refCant)
  }, [])

  return (
    <div>
      <div>
        <h2>Actualizar ventas </h2>
        <label>Código venta <br />
          <p></p>
        </label>
        <label>ID Vendedor: <br />
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
        <div className="edit-prods-container">
          <li id="li1-edv">Código producto</li>
          <li id="li2-edv">Nombre</li>
          <li id="li3-edv">Precio Unitario</li>
          <li id="li4-edv">cantidad</li>
          <li id="li5-edv">Acciones</li>
        </div>

        <button onClick={updateVenta} type="submit" className="boton-generico-header" id="boton-editar-ventas">Actualizar</button>
      </div>

    </div >
  )
}

export default EditarVentas
