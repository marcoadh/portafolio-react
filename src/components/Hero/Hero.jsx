import React from 'react';
import './Hero.css';
import SocialNetwork from './SocialNetwork/SocialNetwork';
import LinkedIn from '../Icons/LinkedIn/LinkedIn';
import GitHub from '../Icons/GitHub/GitHub';
import calcularDiferenciaFechas from '../../utils/calcularDiferenciaFechas';


const Hero = ({ nombre, cargo, linkedin, github, cv, fechaInicio }) => {

  const { anios, meses } = calcularDiferenciaFechas(fechaInicio)
  let tiempoExperiencia;

  if (anios === 0) {
    tiempoExperiencia = `${meses} meses`
  } else {
    tiempoExperiencia = (meses === 0) ? `${anios} años` : `${anios} años y ${meses} meses`
  }

  return (
    <main>
      <section className="hero-container">
        <h1>Hola, soy {nombre}</h1>

        <p>
          {tiempoExperiencia} de experiencia como
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

          <SocialNetwork href={cv} download>
            CV
          </SocialNetwork>
        </nav>
      </section>
    </main>
  )
}

export default Hero