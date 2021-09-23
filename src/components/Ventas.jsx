import React from 'react'
import './styles/ventas.css'

const Ventas = ({ props }) => {
  const { fecha, codigo, total, vendedor } = props;
  return (
    <div className="info-container">
      <span>{fecha}</span>
      <span>{codigo}</span>
      <span>{total}</span>
      <span>{vendedor}</span>
      <span><img src="" alt="" /><img src="" alt="" /></span>
    </div>
  )
}

export default Ventas
