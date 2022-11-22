import "./App.css";
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Experimets from "./components/Experiments/Experimets";
import Testing from "./components/testing";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url("/backgrounds/pageBackground.svg")`,
      }}
    >
      <Banner />
      {/* <Skills /> */}
      <Projects />
      <Experimets />
      <Contact />
      <Footer />
      <Testing />
    </div>
  );
}

export default App;
