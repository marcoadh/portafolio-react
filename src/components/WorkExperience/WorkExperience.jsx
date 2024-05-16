import React from 'react'
import './WorkExperience.css'
import { DATA } from '../../utils/data'
import WorkExperienceItem from '../WorkExperienceItem/WorkExperienceItem'
import Briefcase from '../Icons/Briefcase/Briefcase'

const WorkExperience = () => {
  return (
    <section>
      <div className="work-experience">
        <h2>
          <Briefcase width={30} height={30} /> Experiencia Laboral
        </h2>

        <div className="work-experience-contents">
          {DATA.experiencia.map(exp => (
            <WorkExperienceItem key={exp.cargo} experiencia={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience