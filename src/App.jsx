import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Projects from "./components/Projects/Projects";

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <WorkExperience />
        <Projects />
      </div>
    </>
  )
}

export default App
