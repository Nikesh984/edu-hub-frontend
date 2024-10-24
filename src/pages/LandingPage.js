import React, { useState } from 'react';
import { FaBars, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // For icons
import canvasBanner from '../Images/canvas-banner1.jpg';
import LibraryImage from '../Images/neu_bz612s73n-min.jpg';
import TrainingImage from '../Images/canvas-resources.jpg';
import './styles.css'

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black">
      {/* 1. Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-black-600">
        <div className="flex items-center">
            <div className="w-9 h-9 bg-red-600 mr-4"></div>
            <div className="text-white text-2xl font-bold">EduHub</div>
        </div>
        
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white">Explore LMS</a>
          {/* <a href="#" className="text-white">Courses</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Contact</a> */}
        </div>
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={toggleMenu}>
          <FaBars />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-600 text-white space-y-2 px-4 py-2">
          <a href="#" className="block">Home</a>
          <a href="#" className="block">Courses</a>
          <a href="#" className="block">About</a>
          <a href="#" className="block">Contact</a>
        </div>
      )}

      {/* 2. Sub-navbar-like section */}
      {/* <div className="flex justify-end space-x-4 py-4 px-6 bg-gray-100">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Option 1</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Option 2</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Option 3</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Option 4</button>
      </div> */}

        <div className="flex justify-between items-center py-4 px-6 bg-gray-100 " style={{ height: '6rem' }}>
        {/* Left side text */}
            <div className="text-gray-700 text-lg font-semibold">
                University Name
            </div>

            {/* Right side buttons */}
            <div className="flex space-x-9">
                <a href='#'>Faculty Resources</a>
                <a href='#' >Student Resources</a>
                <a href='#'>Knowledge Base</a>
                <button className="bg-red-600 text-white px-4 rounded">Log in to Canvas</button>
                {/* <button className="bg-red-600 text-white px-4 py-2 rounded">Option 1</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Option 2</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Option 3</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Option 4</button> */}
            </div>
        </div>

      {/* 3. Main image with content box */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${canvasBanner})` ,backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* <div className="absolute inset-0 flex items-center justify-start px-10 bg-black bg-opacity-50">
          <div className="text-white max-w-lg">
            <h1 className="text-4xl font-bold mb-4">Welcome to EduHub! Unlock the full potential of EduHub!</h1>
            <p className="text-lg">
            EduHub is the home base for all university courses. Faculty and student resources are available to help maximize teaching and learning on the platform.
            </p>
          </div>
        </div> */}
        <div className="absolute inset-0 flex items-center justify-start px-10 ml-10">
        <div className="bg-black p-10 w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-white">Welcome to EduHub! Unlock the full potential of EduHub!</h1>
          <p className="text-lg text-white">
            EduHub is the home base for all university courses. Faculty and student resources are available to help maximize teaching and learning on the platform.
          </p>
          <button className="bg-red-600 text-white p-2 font-bold rounded">Log in to Canvas</button>
        </div>
      </div>

      </div>

      {/* 4. Image on left, content on right */}
      <div className="flex flex-col md:flex-row items-center py-12 px-6 bg-white">
        <img src={LibraryImage} alt="Left image" className="w-full md:w-1/2 ml-20" />
        <div className="text-center md:text-left md:pl-8 mt-6 md:mt-0">
          <h2 className="text-2xl text-black font-bold">Access EduHub from Anywhere!
          </h2>
          <p className="mt-4">
          Download the EduHub mobile app to stay connected to your courses, get notifications, check grades, and more!
          </p>
          <button className="bg-red-600 text-white p-2 font-bold rounded">Learn More About EduHub Mobile App</button>
        </div>
      </div>

      {/* 5. Image on right, content on left */}
      <div className="flex flex-col md:flex-row-reverse items-center py-12 px-6 bg-gray-100">
        <img src={TrainingImage} alt="Right image" className="w-full md:w-1/2" />
        <div className="text-center md:text-left md:pr-8 mt-6 md:mt-0">
          <h2 className="text-2xl text-black font-bold">What is EduHub?</h2>
          <p className="mt-4">
          EduHub is University learning management system and digital home base for course content, assignments, and communication. Open, intuitive, and born in the cloud, Canvas streamlines all the digital tools and content that teachers and students love, for a simpler and more connected learning experience. 
          </p>
        </div>
      </div>

      {/* 6. Alternating sections */}
      <div className="flex flex-col md:flex-row items-center py-12 px-6">
        <img src="your-image-url" alt="Left image" className="w-full md:w-1/2" />
        <div className="text-center md:text-left md:pl-8 mt-6 md:mt-0">
          <h2 className="text-2xl font-bold">Student Chatbot</h2>
          <p className="mt-4">
            Get answers to your queries with our intelligent chatbot system.
          </p>
        </div>
      </div>

      {/* 7. Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center">
            <p className="text-sm">© 2024 EduHub. All Rights Reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-blue-500"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-blue-500"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
