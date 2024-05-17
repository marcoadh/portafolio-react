import React from 'react'
import './Projects.css'
import Code from '../Icons/Code/Code'
import Title from '../Title/Title'

const Projects = () => {
  return (
    <div className="projects">
      <Title>
        <Code width={30} height={30} /> Proyectos
      </Title>
    </div>
  )
}

export default Projects