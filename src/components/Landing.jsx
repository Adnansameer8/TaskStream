import React from 'react';
import landing from '../assets/landing.png'; // ✅ make sure this path is correct
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f5ebe1" }}>
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 md:px-10 py-6">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500 font-bold text-2xl">X</span>
          <span className="text-gray-700 font-semibold">Company Name</span>
        </div>
        {/* Responsive Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Our Mission</a>
          <a href="#">Menu</a>
        </nav>
        {/* Mobile Menu Button (optional) */}
        <button className="md:hidden text-gray-600">☰</button>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-12 space-y-10 md:space-y-0">
        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            A Todo list <br /> But on Steroids <br /> 
            <span className="text-indigo-900">Introducing Kanban Board</span>
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto md:mx-0">
            Create smart tasks, set reminders, and achieve more every day.
            Learn how to build a personal to-do system that helps you focus
            on what truly matters.
          </p>
          <Link to="/Login" className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition">
            Get Started
          </Link>
        </div>

        {/* Right Illustration */}
        <div className="md:w-1/2 flex  items-center relative">
          <div className="bg-white shadow-lg ml-10 rounded-2xl p-6 w-full max-w-sm relative z-10">
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <input type="checkbox" checked readOnly className="w-5 h-5 accent-indigo-600" />
                <span className="text-gray-700">Plan my day</span>
              </li>
              <li className="flex items-center space-x-3">
                <input type="checkbox" checked readOnly className="w-5 h-5 accent-indigo-600" />
                <span className="text-gray-700">Finish project work</span>
              </li>
              <li className="flex items-center space-x-3">
                <input type="checkbox" checked readOnly className="w-5 h-5 accent-indigo-600" />
                <span className="text-gray-700">Read 10 pages</span>
              </li>
              <li className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 accent-indigo-600" />
                <span className="text-gray-700">Workout session</span>
              </li>
            </ul>
          </div>

          {/* Character Illustration */}
          <img src={landing} alt="Illustration" className="mt-6 w-1/2" />
        </div>
      </main>

      {/* Footer Decoration */}
      <div className="mt-auto">
        <div className="bg-yellow-400 h-20 md:h-32 w-full rounded-t-[40px]"></div>
      </div>
    </div>
  );
};

export default Landing;
