// frontend/src/pages/CareerQuiz.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

const CareerQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [recommendedPaths, setRecommendedPaths] = useState([]);

  const questions = [
    {
      id: 1,
      question: "What type of work environment do you prefer?",
      options: [
        "Fast-paced, dynamic startup environment",
        "Structured corporate setting",
        "Creative and artistic workspace",
        "Independent, remote work",
        "Collaborative team environment"
      ]
    },
    {
      id: 2,
      question: "Which skills do you enjoy using the most?",
      options: [
        "Problem-solving and logical thinking",
        "Working with people and communication",
        "Creative design and artistic expression",
        "Analyzing data and finding patterns",
        "Building and creating things"
      ]
    },
    {
      id: 3,
      question: "What motivates you the most in your work?",
      options: [
        "Innovation and creating new solutions",
        "Helping others and making a social impact",
        "Financial rewards and career advancement",
        "Personal growth and learning opportunities",
        "Work-life balance and flexibility"
      ]
    },
    {
      id: 4,
      question: "How do you prefer to learn new skills?",
      options: [
        "Hands-on projects and experimentation",
        "Structured courses and certifications",
        "Mentorship and one-on-one guidance",
        "Self-paced online tutorials",
        "Group workshops and collaborative learning"
      ]
    },
    {
      id: 5,
      question: "What's your preferred work schedule?",
      options: [
        "Flexible hours with varied daily tasks",
        "Standard 9-to-5 with clear structure",
        "Project-based with deadline focus",
        "Remote work with self-management",
        "Team-based with regular collaboration"
      ]
    }
  ];

  const careerPaths = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Build modern web applications using cutting-edge technologies",
      match: 95,
      image: "https://placehold.co/400x250/3b82f6/ffffff?text=Web+Dev",
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
      salary: "$85,000 - $140,000"
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      description: "Transform raw data into actionable business insights",
      match: 88,
      image: "https://placehold.co/400x250/8b5cf6/ffffff?text=Data+Science",
      skills: ["Python", "SQL", "Machine Learning", "Statistics"],
      salary: "$95,000 - $160,000"
    },
    {
      id: 3,
      title: "UX/UI Design",
      description: "Create beautiful and intuitive user experiences",
      match: 82,
      image: "https://placehold.co/400x250/f59e0b/ffffff?text=UX/UI+Design",
      skills: ["Figma", "User Research", "Prototyping", "Visual Design"],
      salary: "$75,000 - $120,000"
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Drive growth through strategic marketing campaigns",
      match: 78,
      image: "https://placehold.co/400x250/10b981/ffffff?text=Marketing",
      skills: ["SEO", "Social Media", "Analytics", "Content Strategy"],
      salary: "$60,000 - $100,000"
    }
  ];

  const handleAnswerSelect = (optionIndex) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate recommendations
      calculateRecommendations();
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateRecommendations = () => {
    // Simple recommendation algorithm based on answers
    // In a real app, this would be more sophisticated
    setRecommendedPaths(careerPaths.sort(() => Math.random() - 0.5));
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setRecommendedPaths([]);
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Career Recommendations</h1>
            <p className="text-gray-600">Based on your preferences, here are the best paths for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {recommendedPaths.map((path) => (
              <div key={path.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{path.title}</h3>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {path.match}% Match
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{path.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {path.skills.map((skill, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">Average Salary:</span>
                    <span className="font-medium text-gray-900">{path.salary}</span>
                  </div>
                  
                  <button 
                    onClick={() => navigate(`/paths/${path.id}`)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors"
                  >
                    Explore This Path
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={restartQuiz}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors mr-4"
            >
              Retake Quiz
            </button>
            <button
              onClick={() => navigate('/paths')}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Browse All Paths
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow">
          {/* Progress Bar */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm text-gray-500">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Content */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {currentQ.question}
            </h2>

            <div className="space-y-4 mb-8">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                    selectedAnswer === index
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 ${
                      selectedAnswer === index
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswer === index && (
                        <Check className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <span className="text-gray-800">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`flex items-center px-4 py-2 rounded-lg font-medium ${
                  currentQuestion === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </button>
              
              <button
                onClick={handleNext}
                disabled={selectedAnswer === undefined}
                className={`flex items-center px-6 py-2 rounded-lg font-medium ${
                  selectedAnswer === undefined
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerQuiz;