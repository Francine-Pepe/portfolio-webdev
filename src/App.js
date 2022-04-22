import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
