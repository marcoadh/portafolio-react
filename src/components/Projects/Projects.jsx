import React from 'react'
import './Projects.css'
import Title from '../Title/Title'
import Code from '../Icons/Code/Code'
import ProjectItem from './ProjectItem/ProjectItem'

const Projects = ({ proyectos }) => {
  return (
    <div id="proyectos" className="projects">
      <Title>
        <Code width={30} height={30} /> Proyectos
      </Title>

      <div className="projects-contents">
        {proyectos.map((proyecto, i) => <ProjectItem key={i} proyecto={proyecto} />)}
      </div>
    </div>
  )
}

export default Projects