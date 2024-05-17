import React from 'react'
import './Navbar.css'

const Navbar = ({ correo }) => {
  return (
    <nav className='nav-wrapper'>
      <div className="nav-content">
        <span className="logo">MarcoDev</span>

        <ul>
          <li><a href='#experiencia' className='menu-item active'>Experiencia</a></li>
          <li><a href='#habilidades' className='menu-item'>Habilidades</a></li>
          <li><a href='#proyectos' className='menu-item'>Proyectos</a></li>
          <li><a href={`mailto: ${correo}`} className='menu-item'>Contáctame</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;