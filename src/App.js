import "./App.css";
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url("/backgrounds/pageBackground.svg")`,
      }}
    >
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
