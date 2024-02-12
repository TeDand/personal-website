
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PhotographyPortfolio from './components/photography/PhotographyPortfolio'; // Import your photography portfolio component
import './App.css';
import Navbar from './components/navbar/Navbar';
import Landing from './components/sections/landing/Landing';
import Education from './components/sections/education/Education';
import Experience from './components/sections/experience/Experience';
import Projects from './components/sections/projects/Projects';
import Contact from './components/sections/contact/Contact';

function App() {
  return (
    <Router basename="/personal-website/">
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

function Routes() {
  // const location = useLocation();

  return (
    <Switch>
      <Route path="/photography-portfolio">
        <PhotographyPortfolio />
      </Route>
      <Route path="/">
        <Navbar />
        <Landing />
        <Contact />
        <Education />
        <Experience />
        <Projects />
      </Route>
    </Switch>
  );
}

export default App;
