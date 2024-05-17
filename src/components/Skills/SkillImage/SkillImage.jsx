import React from 'react'
import './SkillImage.css'

const SkillImage = ({ habilidad }) => {
  const { nombre, iconoURL } = habilidad
  return (
    <div className='skill-image'>
      <img src={iconoURL} alt={nombre} width={50} height={50} />
      {nombre}
    </div>
  )
}

export default SkillImage