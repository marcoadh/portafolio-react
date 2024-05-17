import React from 'react'
import './WorkExperience.css'
import Title from '../Title/Title'
import Briefcase from '../Icons/Briefcase/Briefcase'
import WorkExperienceItem from '../WorkExperienceItem/WorkExperienceItem'

const WorkExperience = ({ experiencias }) => {
  return (
    <div id="experiencia" className="work-experience">
      <Title>
        <Briefcase width={30} height={30} /> Experiencia Laboral
      </Title>

      <div className="work-experience-contents">
        {experiencias.map((experiencia, i) => <WorkExperienceItem key={i} experiencia={experiencia} />)}
      </div>
    </div>
  )
}

export default WorkExperience