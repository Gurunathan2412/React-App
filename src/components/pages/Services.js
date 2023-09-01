import React from 'react'
import '../../App.css'

const r = Math.floor(Math.random()*14)+1

function Services() {
  return (
    <h1 className='services' style={{backgroundImage:`url('images/img-${r}.jpg')`, backgroundSize: "auto", color:"#352F44", backgroundPosition: "right",
    justifyContent: "left"}}>Services</h1>
  )
}

export default Services