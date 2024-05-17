import React from 'react';
import './Hero.css';
import SocialNetwork from './SocialNetwork/SocialNetwork';
import LinkedIn from '../Icons/LinkedIn/LinkedIn';
import GitHub from '../Icons/GitHub/GitHub';


const Hero = ({ nombre, cargo, linkedin, github }) => {
  return (
    <main>
      <section className="hero-container">
        <h1>Hola, soy {nombre}</h1>

        <p>
          3 años de experiencia como
          <span className="hero-work-position"> {cargo}.</span><br />
          <span className="hero-place">De Lima, Perú 🇵🇪</span>.
          Soy autodidacta, en constante aprendizaje para mejorar mis habilidades.
        </p>

        <nav>
          <SocialNetwork href={linkedin}>
            <LinkedIn fill="#0A66C2" width={18} height={18} /> LinkedIn
          </SocialNetwork>

          <SocialNetwork href={github}>
            <GitHub width={18} height={18} /> GitHub
          </SocialNetwork>
        </nav>
      </section>
    </main>
  )
}

export default Hero