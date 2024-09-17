import React from 'react';
import Home from './Home';
import About from '../About/About';
import Contact from '../Contact/Contact';

function MainContent() {
  return (
    <div className="lg:w-[75%] w-full h-screen bg-gray-100 overflow-auto lg:ml-[25%] fixed top-0 left-0 z-10">
      <section id="home" className="h-screen">
        <Home />
      </section>
      <section id="about" className="h-screen">
        <About />
      </section>
      <section id="contact" className="h-screen">
        <Contact />
      </section>
      {/* Add other sections here */}
    </div>
  );
}

export default MainContent;
