import React from 'react';
import './Hero.css';
import { DATA } from '../../utils/data'
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import LinkedIn from '../Icons/LinkedIn/LinkedIn';
import GitHub from '../Icons/GitHub/GitHub';


const Hero = () => {
  return (
    <main>
      <section className="hero-container">
        <h1>Hola, soy {DATA.nombre}</h1>

        <p>
          3 años de experiencia como
          <span className="hero-work-position"> {DATA.cargo}.</span><br />
          <span className="hero-place">De Lima, Perú 🇵🇪</span>.
          Soy autodidacta, constantemente tomando cursos para aprender nuevas tecnologías.
        </p>

        <nav>
          <SocialNetwork href={DATA.linkedin}>
            <LinkedIn fill="#0A66C2" width={18} height={18} /> LinkedIn
          </SocialNetwork>

          <SocialNetwork href={DATA.github}>
            <GitHub width={18} height={18} /> GitHub
          </SocialNetwork>
        </nav>
      </section>
    </main>
  )
}

export default Hero