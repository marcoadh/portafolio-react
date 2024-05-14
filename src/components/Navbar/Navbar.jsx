import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav-wrapper'>
      <div className="nav-content">
        <span className="logo">MarcoDev</span>

        <ul>
          <li><a className='menu-item active'>Experiencia</a></li>
          <li><a className='menu-item'>Proyectos</a></li>
          <li><a className='menu-item'>Sobre mí</a></li>
          <li><a className='menu-item'>Contáctame</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;