// frontend/src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Users, Award, BookOpen, Target } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Personalized Paths",
      description: "Custom learning journeys tailored to your goals and skill level"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with real-world experience"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Certification",
      description: "Earn recognized certificates to showcase your achievements"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Navigate Your Learning Journey
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Discover personalized learning paths designed to help you achieve your career goals and unlock your potential
          </p>
          
          {/* Career Quiz Button */}
          <div className="mb-12">
            <Link 
              to="/career-quiz"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Target className="h-6 w-6 mr-2" />
              Find Your Perfect Career Path
              <span className="ml-2 text-sm bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full">
                New
              </span>
            </Link>
            <p className="mt-3 text-blue-200">Take our 5-minute quiz to discover your ideal career path</p>
          </div>
          
          <div className="max-w-2xl mx-auto relative">
            <div className="relative flex items-center">
              <Search className="absolute left-4 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for paths, skills, or instructors..."
                className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-xl text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
              <button className="absolute right-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PathPilot?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide the tools and resources you need to succeed in your learning journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who have transformed their careers with PathPilot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              Get Started Free
            </Link>
            <Link to="/paths" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors">
              Browse Paths
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;