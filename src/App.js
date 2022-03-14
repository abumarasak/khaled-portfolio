import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import "./Global.css";
import TimeLine from "./components/TimeLine";
import About from "./components/About";
import Skills from "./components/Skills";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <Navbar />
      <Landing />
      <Projects />
      <TimeLine />
      <About />
      <Skills />
      <Service />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
