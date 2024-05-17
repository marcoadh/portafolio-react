import React from 'react'
import "./App.css";
import { DATA } from "./utils/data";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Projects from "./components/Projects/Projects";

const App = () => {

  return (
    <>
      <Navbar correo={DATA.correo} />
      <div className="container">
        <Hero nombre={DATA.nombre} cargo={DATA.cargo} linkedin={DATA.linkedin} github={DATA.github} />
        <WorkExperience experiencias={DATA.experiencia} />
        <Projects proyectos={DATA.proyectos} />
      </div>
    </>
  )
}

export default App
