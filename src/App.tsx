import About from "./About";
import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Journey from "./Journey/Journey";
import Achievements from "./Achievements";
import Contact from "./contact/Contact";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
