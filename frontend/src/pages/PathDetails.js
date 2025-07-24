// frontend/src/pages/PathDetails.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, BookOpen, Play, CheckCircle, Download, FileText } from 'lucide-react';

const PathDetails = () => {
  const { id } = useParams();
  console.log('Path ID:', id);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for path details
  const path = {
    id: 1,
    title: "Full Stack Web Development",
    instructor: "Sarah Johnson",
    rating: 4.8,
    students: 12500,
    duration: "12 weeks",
    level: "Beginner",
    price: 299,
    image: "https://placehold.co/800x400/3b82f6/ffffff?text=Web+Development",
    category: "technology",
    description: "Master modern web development with React, Node.js, and MongoDB. This comprehensive path will take you from beginner to job-ready developer.",
    learningOutcomes: [
      "Build responsive web applications with React",
      "Create RESTful APIs with Node.js and Express",
      "Work with databases using MongoDB",
      "Deploy applications to cloud platforms",
      "Implement authentication and authorization"
    ],
    modules: [
      {
        id: 1,
        title: "HTML & CSS Fundamentals",
        duration: "2 weeks",
        lessons: 12,
        completed: true
      },
      {
        id: 2,
        title: "JavaScript Essentials",
        duration: "3 weeks",
        lessons: 18,
        completed: true
      },
      {
        id: 3,
        title: "React Development",
        duration: "3 weeks",
        lessons: 20,
        completed: false
      },
      {
        id: 4,
        title: "Node.js Backend",
        duration: "2 weeks",
        lessons: 15,
        completed: false
      },
      {
        id: 5,
        title: "Database Integration",
        duration: "1 week",
        lessons: 8,
        completed: false
      },
      {
        id: 6,
        title: "Deployment & Final Project",
        duration: "1 week",
        lessons: 6,
        completed: false
      }
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'instructor', label: 'Instructor' },
    { id: 'reviews', label: 'Reviews' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Path Header */}
        <div className="bg-white rounded-lg shadow mb-8">
          <img 
            src={path.image} 
            alt={path.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{path.title}</h1>
                <p className="text-gray-600 mb-4">Instructor: {path.instructor}</p>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-medium">{path.rating}</span>
                    <span className="text-gray-500 ml-1">({path.students.toLocaleString()} students)</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-1" />
                    <span>{path.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <BookOpen className="h-5 w-5 mr-1" />
                    <span>{path.level}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-3xl font-bold text-gray-900 mb-2">${path.price}</div>
                <div className="flex space-x-2">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                    Enroll Now
                  </button>
                  {/* Quiz Button */}
                  <Link
                    to={`/courses/${path.id}/quizzes`}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
                  >
                    <FileText className="h-5 w-5 mr-1" />
                    Quizzes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-6 text-sm font-medium border-b-2 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-600 mb-6">{path.description}</p>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">What you'll learn</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {path.learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{outcome}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">Path Includes</h3>
                  <ul className="text-blue-800 space-y-1">
                    <li>• 72 hours of on-demand video content</li>
                    <li>• 6 downloadable resources</li>
                    <li>• Certificate of completion</li>
                    <li>• Full lifetime access</li>
                    <li>• Mobile and TV access</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Curriculum</h2>
                <div className="space-y-4">
                  {path.modules.map((module) => (
                    <div key={module.id} className="border border-gray-200 rounded-lg">
                      <div className="p-4 bg-gray-50 rounded-t-lg flex items-center justify-between">
                        <div className="flex items-center">
                          {module.completed ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          ) : (
                            <Play className="h-5 w-5 text-gray-400 mr-3" />
                          )}
                          <div>
                            <h3 className="font-medium text-gray-900">{module.title}</h3>
                            <p className="text-sm text-gray-500">{module.lessons} lessons • {module.duration}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {/* Quiz Link for each module */}
                          <Link
                            to={`/courses/${path.id}/quizzes`}
                            className="text-green-600 hover:text-green-800 flex items-center text-sm"
                          >
                            <FileText className="h-4 w-4 mr-1" />
                            Quiz
                          </Link>
                          <button className="text-blue-600 hover:text-blue-800">
                            <Download className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2">
                          {[1, 2, 3].map((lesson) => (
                            <li key={lesson} className="flex items-center text-sm text-gray-600">
                              <Play className="h-4 w-4 mr-2 text-gray-400" />
                              <span>Lesson {lesson}: Introduction to {module.title.split(' ')[0]}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'instructor' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">About the Instructor</h2>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{path.instructor}</h3>
                    <p className="text-gray-600 mb-3">Senior Web Developer & Instructor</p>
                    <p className="text-gray-700">
                      Sarah has over 10 years of experience in web development and has taught 
                      thousands of students through online platforms. She specializes in modern 
                      JavaScript frameworks and full-stack development.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Student Reviews</h2>
                <div className="space-y-6">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b border-gray-200 pb-6">
                      <div className="flex items-center mb-2">
                        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                        <div>
                          <h4 className="font-medium text-gray-900">Student {review}</h4>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="ml-2 text-sm text-gray-500">2 weeks ago</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        This path completely transformed my understanding of web development. 
                        The instructor explains concepts clearly and the projects are really 
                        practical. Highly recommended for beginners!
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathDetails;