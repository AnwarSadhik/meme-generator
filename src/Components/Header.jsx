import React from 'react'
import logo from '../img/logo.png'
import './Header.css'

const Header = ({ setMeme }) => {
  return (
    <div className='nav' onClick={() => {
      setMeme(null)
    }}>
        <div className="logo">
            <img src={logo} className='logo-img'/>
        </div>
        <h1><span>MEME</span> Generator</h1>
    </div>
  )
}

export default Header