import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import "./App.css";

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <WorkExperience />
      </div>
    </>
  )
}

export default App
