import About from "./components/About/aboutme.js";
import Certificate from "./components/Certificate/certificate.js";
import Contact from "./components/Contact/contactme.js";
import Intro from "./components/Intro/intro.js";
import Navbar from "./components/Navbar/navbar.js";
import Project from "./components/Project/project.js";
import Skills from "./components/Skills/skill.js";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Project/>
      <Certificate/>
      <Contact/>
      
      
      
    </div>
  );
}

export default App;
