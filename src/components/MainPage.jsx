import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import SocialLinks from "./SocialLinks";
import React from "react";

const Main = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      <SocialLinks />
    </React.Fragment>
  );
};

export default Main;
