// frontend/src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="ml-2 text-xl font-bold">PathPilot</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering learners to achieve their goals through personalized learning paths.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Paths</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/paths" className="hover:text-white">Technology</Link></li>
              <li><Link to="/paths" className="hover:text-white">Business</Link></li>
              <li><Link to="/paths" className="hover:text-white">Design</Link></li>
              <li><Link to="/paths" className="hover:text-white">Arts & Creativity</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="#" className="hover:text-white">About Us</Link></li>
              <li><Link to="#" className="hover:text-white">Careers</Link></li>
              <li><Link to="#" className="hover:text-white">Blog</Link></li>
              <li><Link to="#" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="#" className="hover:text-white">Help Center</Link></li>
              <li><Link to="#" className="hover:text-white">Community</Link></li>
              <li><Link to="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PathPilot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;