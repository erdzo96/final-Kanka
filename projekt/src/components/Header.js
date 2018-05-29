import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../obrazky/Logo.png'

const Header =_=> (
  <header>
  <img className="logo" src={ Logo }/>
  <div className="logo_text">The Market</div>
  <div className="header">
  
  </div>
    <nav>
      <ul>
        <li><Link to='/'>Hlavna stranka</Link></li>
        <li><Link to='/produkty'>Produkty</Link></li>
        <li><Link to='/hodnotenie'>Hodnotenie</Link></li>
        <li><Link to='/kontakt'>Kontakt</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
