import React from "react";
import Home from "./Components/Home";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Footer } from "./Components/Footer";

export const Mainpage = () => {
  return (
    <div>
      <Home />
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};
