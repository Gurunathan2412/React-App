import React from 'react'
import '../../App.css'

const r = Math.floor(Math.random()*14)+1

function Signup() {
  return (
    <h1 className='sign-up' style={{backgroundImage:`url('images/img-${r}.jpg')`, backgroundSize: "auto", color:"#352F44", backgroundPosition: "right",
    justifyContent: "left"}}>SignUp</h1>
  )
}

export default Signup;