import React from 'react'
import './Skills.css'
import Title from '../Title/Title'
import ToolsIcon from '../Icons/ToolsIcon/ToolsIcon'
import SkillImage from './SkillImage/SkillImage'

const Skills = ({ habilidades }) => {
  return (
    <div id='habilidades' className='skills'>
      <Title>
        <ToolsIcon /> Habilidades
      </Title>

      <div className="skills-contents">
        {habilidades.map((habilidad, i) => <SkillImage key={i} habilidad={habilidad} />)}
      </div>
    </div>
  )
}

export default Skills