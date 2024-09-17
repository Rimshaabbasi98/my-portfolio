// import React from 'react';
// import Home from './Home';

// function MainContent() {
//   return (
//     <div className="relative min-h-screen">
//       {/* Sidebar on the left */}
//       <div className="lg:ml-64"></div> 

//       {/* Main Content */}
//       <div className="absolute top-0 left-64 w-[calc(100%-16rem)] h-screen">
//         <section id="home">
//           <Home />
//         </section>
//         <section id="about">
//           <h2 className="text-4xl font-bold mb-4">About</h2>
//           <p>Your content here...</p>
//         </section>
//         <section id="contact">
//           <h2 className="text-4xl font-bold mb-4">Contact</h2>
//           <p>Your content here...</p>
//         </section>
//         <section id="projects">
//           <h2 className="text-4xl font-bold mb-4">Projects</h2>
//           <p>Your content here...</p>
//         </section>
//         <section id="skills">
//           <h2 className="text-4xl font-bold mb-4">Skills</h2>
//           <p>Your content here...</p>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default MainContent;
// import React from 'react';
// import Home from './Home';
// import About from '../About/About';

// function MainContent() {
//   return (
//     <div className="lg:w-[75%] w-full h-screen ml-0  flex items-center justify-center">
//       {/* Main Content */}
//       <section id="home" className="w-full h-full">
//         <Home />
//         <About/>
//       </section>
//     </div>
//   );
// }

// export default MainContent;

import React from 'react';
import Home from './Home';
import About from '../About/About';

function MainContent() {
  return (
    <div className="lg:w-[75%] w-full h-screen bg-gray-100 overflow-auto lg:ml-[25%] fixed top-0 left-0 z-10">
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About/>
      </section>
      {/* Add other sections here */}
    </div>
  );
}

export default MainContent;
