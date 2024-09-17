import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className="relative w-full h-full bg-[url('https://miro.medium.com/v2/resize:fit:1400/1*hn1UA__pO2b0k520Ac1ApQ.jpeg')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center text-white">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-20 p-6 mx-auto max-w-4xl py-72">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold pt-20 py-6">Welcome to My Portfolio</h1>
        <p className="text-lg md:text-xl mb-8">
          <TypeAnimation
            sequence={[
              'I am a WEB DEVELOPER.',
              1000,
              'I am a FRONTEND DEVELOPER.',
              1000,
              'I am a PROJECT MANAGER.',
              1000,
            ]}
            wrapper="span"
            speed={50}
            cursor={false}
            style={{ fontSize: '1.75em', display: 'inline-block', lineHeight: '1.5em' }}
            repeat={1}
          />
        </p>
        <a
          href="/path/to/resume.pdf"
          download
          className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full text-lg font-semibold flex items-center justify-center"        >
          <FaDownload className="mr-2" /> Download Resume        </a>
      </div>
    </div>
  );
};

export default Home;
