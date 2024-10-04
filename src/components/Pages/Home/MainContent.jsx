import React from 'react';
import Home from './Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../MyProjects/Projects';

function MainContent() {
  return (
    <div className="lg:w-[75%] w-full h-screen bg-gray-100 overflow-auto lg:ml-[25%] ml-0 fixed top-0 left-0 z-10">
      <section id="home" className="lg:h-screen h-auto lg:mb-0 mb-12"> 
        <Home />
      </section>
      <section id="about" className="lg:h-screen h-auto lg:mb-0 mb-12"> 
        <About />
      </section>
      <section id="contact" className="lg:h-screen h-auto lg:mb-0 mb-12"> 
        <Contact />
      </section>
      <section id="projects" className="lg:h-screen h-auto lg:mb-0 mb-12"> 
        <Projects />
      </section>    </div>
  );
}

export default MainContent;
