import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import SocialLinks from "./components/socialLinks";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
      <SocialLinks />
    </React.Fragment>
    
  );
}

export default App;
