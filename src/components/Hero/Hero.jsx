import React from 'react';
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import GitHub from '../Icons/GitHub/GitHub';
import LinkedIn from '../Icons/LinkedIn/LinkedIn';
import './Hero.css';


const Hero = () => {
  return (
    <main>
      <section className="hero-container">
        <h1>Hola, soy Marco De la cruz</h1>

        <p>
          3 años de experiencia como
          <span className="hero-work-position"> Desarrollador Web.</span><br />
          <span className="hero-place">De Lima, Perú 🇵🇪</span>.
          Soy autodidacta, constantemente tomando cursos para aprender nuevas tecnologías.
        </p>

        <nav>
          <SocialNetwork href="https://www.linkedin.com/in/marcodelacruzh/">
            <LinkedIn fill="#0A66C2" width={18} height={18} /> LinkedIn
          </SocialNetwork>

          <SocialNetwork href="https://github.com/marcoadh">
            <GitHub width={18} height={18} /> GitHub
          </SocialNetwork>
        </nav>
      </section>
    </main>
  )
}

export default Hero