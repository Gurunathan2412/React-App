import React from 'react'
import '../../App.css'

const r = Math.floor(Math.random()*14)+1

function Products() {
  return (
    <h1 className='products' style={{backgroundImage:`url('images/img-${r}.jpg')`, backgroundSize: "auto", color:"#352F44", backgroundPosition: "left",
    justifyContent: "right"}}>Products</h1>
  )
}

export default Products