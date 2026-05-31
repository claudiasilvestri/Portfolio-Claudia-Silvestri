import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Services from "./components/Services";
import Prices from "./components/Prices";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <Projects />
      <About />
      <Services />
      <Prices />
      <Contacts />

      <Footer />
    </>
  );
}

export default App;