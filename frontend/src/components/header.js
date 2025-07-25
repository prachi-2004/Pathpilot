import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.jpg" 
                alt="PathPilot Logo" 
                className="h-50 w-40 rounded-full object-contain"
              />
              <span className="text-2xl font-bold text-gray-900 ml-3">
              </span>
            </Link>
            <nav className="hidden md:ml-10 md:flex space-x-8">
              <Link to="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Home</Link>
              <Link to="/features" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Features</Link>
              <Link to="/paths" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Paths</Link>
              {user && (
                <Link to="/dashboard" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Dashboard</Link>
              )}
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-700">Hello, {user.name}</span>
                <button 
                  onClick={logout}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
                  Login
                </Link>
                <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;