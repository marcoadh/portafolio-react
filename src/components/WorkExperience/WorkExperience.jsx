import React from 'react'
import './WorkExperience.css'
import { DATA } from '../../utils/data'
import Title from '../Title/Title'
import Briefcase from '../Icons/Briefcase/Briefcase'
import WorkExperienceItem from '../WorkExperienceItem/WorkExperienceItem'

const WorkExperience = () => {
  return (
    <div className="work-experience">
      <Title>
        <Briefcase width={30} height={30} /> Experiencia Laboral
      </Title>

      <div className="work-experience-contents">
        {DATA.experiencia.map(exp => (
          <WorkExperienceItem key={exp.cargo} experiencia={exp} />
        ))}
      </div>
    </div>
  )
}

export default WorkExperience