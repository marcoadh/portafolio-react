import React from 'react'
import "./App.css";
import { DATA } from "./utils/data";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Projects from "./components/Projects/Projects";
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

const App = () => {

  return (
    <>
      <Navbar correo={DATA.correo} />
      <div className="container">
        <Hero nombre={DATA.nombre} cargo={DATA.cargo} linkedin={DATA.linkedin} github={DATA.github} cv={DATA.cv} fechaInicio={DATA.fechaInicioProgramando} />
        <WorkExperience experiencias={DATA.experiencia} />
        <Skills habilidades={DATA.habilidades} />
        <Projects proyectos={DATA.proyectos} />
      </div>
      <Footer nombre={DATA.nombre} />
    </>
  )
}

export default App
