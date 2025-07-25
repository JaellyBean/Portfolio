import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./styles/globals.css";

function App() {
  return (
    <div
      className="App"
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh",
        margin: "0 auto",
      }}
    >
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
