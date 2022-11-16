import "./App.css";
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import ContactImages from "./components/ContactImages/ContactImages";

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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
