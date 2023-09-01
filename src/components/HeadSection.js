import React from 'react'
import {Button} from './Button.js'
import '../App.css'
import './HeroSection.css'

function HeadSection() {
  return (
    <div className='head-container'>
        <video src='videos/video-main.mp4' autoPlay loop muted />
        <h1> Fantasy Freaks</h1>

        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> Start</Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'> Get Started <i className='far fa-play-circle' /></Button>

    </div>
  )
}

export default HeadSection