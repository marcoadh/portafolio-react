import React from 'react'
import './SkillItem.css'

const SkillItem = ({ tecnologia }) => {
  return (
    <span className='skill-item'>{tecnologia}</span>
  )
}

export default SkillItem