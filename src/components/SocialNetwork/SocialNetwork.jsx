import React from 'react';
import './SocialNetwork.css';

const SocialNetwork = props => {
  return (
    <a
      className='social-network'
      {...props}
      target='_blank'
      rel='noopener noreferrer'
    ></a>
  )
}

export default SocialNetwork