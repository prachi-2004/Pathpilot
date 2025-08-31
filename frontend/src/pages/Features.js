import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Features = () => {
  const { user } = useAuth();

  const featuresList = [
    {
      title: "🔒 User Authentication (JWT)",
      description: "Secure login and personalized access.",
      icon: "🔑"
    },
    {
      title: "🧩 Adaptive Career Quiz",
      description: "Evaluates interests, skills, and goals interactively.",
      icon: "📝"
    },
    {
      title: "🤖 AI-powered Career Recommendations",
      description: "Suggests suitable career paths using AI models.",
      icon: "💡"
    },
    {
      title: "📚 Personalized Learning Roadmaps",
      description: "Step-by-step guidance for achieving career goals.",
      icon: "🛤️"
    },
    {
      title: "🔍 Skill Gap Analysis",
      description: "Identifies missing skills and suggests ways to improve.",
      icon: "📊"
    },
    {
      title: "📈 Progress Tracker",
      description: "Tracks user’s growth and career readiness journey.",
      icon: "📅"
    },
    {
      title: "📤 Download Career Plan as PDF",
      description: "Allows users to export and share their personalized roadmap.",
      icon: "📥"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            PathPilot Features
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the powerful tools that will guide your career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-700"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          {user ? (
            <Link 
              to="/dashboard" 
              className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg"
            >
              Go to Dashboard
            </Link>
          ) : (
            <div className="space-y-4">
              <Link 
                to="/register" 
                className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg mr-4"
              >
                Get Started
              </Link>
              <Link 
                to="/login" 
                className="inline-block bg-white text-indigo-600 border border-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition duration-300"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Features;
