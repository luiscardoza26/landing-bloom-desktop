import React, { useEffect, useState } from 'react'
import Logo from '../../assets/logo.png';
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <img src={Logo} alt="Logo" />
        <a href='' className='scroll__down'>Inscribete</a>
      </div>
    </header>
  )
}

export default Header