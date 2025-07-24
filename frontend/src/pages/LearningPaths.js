// frontend/src/pages/LearningPaths.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Users, Clock, BookOpen } from 'lucide-react';

const LearningPaths = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data for paths
  const paths = [
    {
      id: 1,
      title: "Full Stack Web Development",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 12500,
      duration: "12 weeks",
      level: "Beginner",
      price: 299,
      image: "https://placehold.co/400x250/3b82f6/ffffff?text=Web+Dev",
      category: "technology",
      description: "Master modern web development with React, Node.js, and MongoDB"
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      instructor: "Michael Chen",
      rating: 4.6,
      students: 8900,
      duration: "8 weeks",
      level: "Intermediate",
      price: 199,
      image: "https://placehold.co/400x250/10b981/ffffff?text=Marketing",
      category: "business",
      description: "Learn SEO, social media, and analytics to grow your business"
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      instructor: "Dr. Emily Rodriguez",
      rating: 4.9,
      students: 15200,
      duration: "16 weeks",
      level: "Advanced",
      price: 399,
      image: "https://placehold.co/400x250/8b5cf6/ffffff?text=Data+Science",
      category: "technology",
      description: "From Python basics to machine learning and data visualization"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Paths' },
    { id: 'technology', name: 'Technology' },
    { id: 'business', name: 'Business' },
    { id: 'design', name: 'Design' },
    { id: 'arts', name: 'Arts & Creativity' }
  ];

  const filteredPaths = paths.filter(path => {
    const matchesSearch = path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         path.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || path.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Learning Paths</h1>
          <p className="text-gray-600">Discover the perfect path for your career goals</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search paths, skills, or instructors..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-400 mr-2" />
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPaths.map((path) => (
            <div key={path.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={path.image} 
                alt={path.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {path.level}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{path.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{path.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{path.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="mr-3">{path.students.toLocaleString()} students</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{path.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">${path.price}</span>
                  <Link 
                    to={`/paths/${path.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPaths;