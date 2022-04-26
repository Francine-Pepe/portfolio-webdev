import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Navbar from './Components/Navbar/Navbar';
// import Projects from './Components/Projects/Projects';
import ProjectsCards from './Components/Projects/ProjectsCards';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <ProjectsCards />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
