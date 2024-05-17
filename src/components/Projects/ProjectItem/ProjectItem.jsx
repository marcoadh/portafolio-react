import React from 'react'
import './ProjectItem.css'
import SkillItem from './SkillItem/SkillItem'
import ProjectLink from './ProjectLink/ProjectLink'
import GitHub from '../../Icons/GitHub/GitHub'
import Link from '../../Icons/Link/Link'

const ProjectItem = props => {
  const { nombre, descripcion, imagen, repositorio, pagina, tecnologias } = props.proyecto

  return (
    <div className="project-item">
      <img src={imagen} alt={nombre} />
      <div className="project-item-information">
        <h2>{nombre}</h2>
        <div className='skills-container'>
          {tecnologias.map(tecnologia => <SkillItem key={tecnologia} tecnologia={tecnologia} />)}
        </div>
        <p>{descripcion}</p>
        <div className="links">
          {repositorio
            ? <ProjectLink href={repositorio} target='_blank'><GitHub /> Repositorio</ProjectLink>
            : null
          }
          {pagina
            ? <ProjectLink href={pagina} target='_blank'><Link /> Sitio Web</ProjectLink>
            : null
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectItem