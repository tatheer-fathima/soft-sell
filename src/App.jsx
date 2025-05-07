import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <ChatWidget />

        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <span className="text-xl font-bold">SoftSell</span>
                <p className="text-gray-400 mt-2">Your trusted software resale partner</p>
              </div>
              <div className="flex space-x-6">
                {/* Social Media Icons */}
                <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10..." clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253..." />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0..." clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
              <p className="text-gray-400 text-sm text-center md:text-left">© 2023 SoftSell. All rights reserved.</p>
              <div className="flex justify-center md:justify-end space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Contact Us</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
