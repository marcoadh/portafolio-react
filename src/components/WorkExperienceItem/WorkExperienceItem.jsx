import React from 'react'
import './WorkExperienceItem.css'

const WorkExperienceItem = props => {
  const { cargo, empresa, fecha, detalles } = props.experiencia
  return (
    <>
      <div className="work-experience-item">
        <section>
          <h3>{cargo}</h3>
          <div>
            <span>{empresa}</span>
            <time>{fecha}</time>
          </div>
        </section>
        <p>
          {detalles.map((detalle, i) => <li key={i}>{detalle}</li>)}
        </p>
      </div>
    </>
  )
}

export default WorkExperienceItem