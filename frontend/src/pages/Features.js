import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Features = () => {
  const { user } = useAuth();

  const featuresList = [
    {
      title: "🔐 User Authentication (JWT)",
      description: "Secure login and registration with JSON Web Tokens for session management",
      icon: "🔐"
    },
    {
      title: "🎯 Adaptive Career Quiz",
      description: "Personalized career assessment that adapts to your responses for accurate results",
      icon: "🎯"
    },
    {
      title: "🧠 AI-powered Career Recommendations",
      description: "Intelligent suggestions based on your skills, interests, and market trends",
      icon: "🧠"
    },
    {
      title: "🛣️ Personalized Learning Roadmaps",
      description: "Custom learning paths tailored to your career goals and current skill level",
      icon: "🛣️"
    },
    {
      title: "💼 Real-Time Job Listings",
      description: "Up-to-date job opportunities matching your career profile and preferences",
      icon: "💼"
    },
    {
      title: "🧾 Skill Gap Analysis",
      description: "Identify missing skills required for your target roles with detailed reports",
      icon: "🧾"
    },
    {
      title: "📈 Progress Tracker",
      description: "Visualize your learning progress and career advancement milestones",
      icon: "📈"
    },
    {
      title: "💬 Chatbot Support (OpenAI)",
      description: "24/7 AI assistant for career guidance and platform navigation help",
      icon: "💬"
    },
    {
      title: "😊 Sentiment Analysis",
      description: "Emotional insights from your interactions to improve recommendations",
      icon: "😊"
    },
    {
      title: "📤 Download Career Plan as PDF",
      description: "Export your personalized career roadmap for offline reference",
      icon: "📤"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
            PathPilot Features
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the powerful tools that will guide your career journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-indigo-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
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