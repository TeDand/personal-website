import './App.css';
import Navbar from './components/navbar/Navbar';
import Landing from './components/sections/landing/Landing';
import Education from './components/sections/education/Education';
import Experience from './components/sections/experience/Experience';
import Projects from './components/sections/projects/Projects';
import Contact from './components/sections/contact/Contact';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
