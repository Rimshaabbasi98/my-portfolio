import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="w-full h-auto bg-gray-100 py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Qualifications */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <FaGraduationCap className="text-teal-500 mr-2" /> Qualifications
              </h3>
              <ul className="list-disc list-inside space-y-4">
                <li>
                  <strong>Bachelor’s Degree in Commerce</strong> - Karachi University, 2019
                </li>
                <li>
                  <strong>Full Stack Development Course</strong> - Aptech, Ongoing
                </li>
              </ul>
            </div>
          </div>

          {/* Experiences */}
          <div className="lg:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <FaBriefcase className="text-teal-500 mr-2" /> Professional Experience
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="text-xl font-bold">Project Manager</h4>
                  <p className="text-gray-700">January 2022 - Present</p>
                  <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Led project teams in building and optimizing complex websites.</li>
                    <li>Coordinated with design teams to deliver interactive and user-centric UI components.</li>
                    <li>Managed timelines and resources to ensure project delivery within deadlines.</li>
                  </ul>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="text-xl font-bold">Front-End Developer Intern</h4>
                  <p className="text-gray-700">January 2022 - May 2023</p>
                  <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Assisted in creating and optimizing website components.</li>
                    <li>Collaborated with designers to implement interactive UI features.</li>
                    <li>Gained hands-on experience with front-end technologies and best practices.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
