import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Navbar from './Components/Navbar/Navbar';
import ProjectsCards from './Components/Projects/ProjectsCards';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <ProjectsCards />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
