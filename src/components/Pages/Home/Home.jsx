import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div className="w-full h-auto bg-gray-100  lg:py-2">
 
      <div className="relative z-20 p-6 mx-auto max-w-4xl py-72">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  py-6 text-teal-500">Welcome to My Portfolio</h1>
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
            repeat={Infinity}
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
