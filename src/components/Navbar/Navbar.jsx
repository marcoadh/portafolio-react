import React from 'react'
import './Navbar.css'

const Navbar = ({ correo }) => {
  const activeMenuItem = e => {
    document.querySelector('.menu-item.active').classList.remove('active')
    e.target.classList.add('active')
  }

  return (
    <nav className='nav-wrapper'>
      <div className="nav-content">
        <span className="logo">MarcoDev</span>

        <ul>
          <li><a href='#experiencia' className='menu-item active' onClick={activeMenuItem}>Experiencia</a></li>
          <li><a href='#habilidades' className='menu-item' onClick={activeMenuItem}>Habilidades</a></li>
          <li><a href='#proyectos' className='menu-item' onClick={activeMenuItem}>Proyectos</a></li>
          <li><a href={`mailto: ${correo}`} className='menu-item'>Contáctame</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;