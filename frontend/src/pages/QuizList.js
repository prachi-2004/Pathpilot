// frontend/src/pages/QuizList.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Clock, Trophy, RotateCcw, Play } from 'lucide-react';
import api from '../services/api';

const QuizList = () => {
  const { courseId } = useParams();
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await api.get(`/courses/${courseId}/quizzes`);
        setQuizzes(response.data);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizzes();
  }, [courseId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading quizzes...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Course Quizzes</h1>
          <p className="text-gray-600">Test your knowledge with these quizzes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <div key={quiz._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{quiz.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {quiz.questions.length} questions
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{quiz.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="mr-4">{quiz.timeLimit} minutes</span>
                  <Trophy className="h-4 w-4 mr-1" />
                  <span>Pass: {quiz.passingScore}%</span>
                </div>
                
                <div className="flex space-x-3">
                  <Link
                    to={`/quizzes/${quiz._id}/take`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                  >
                    <Play className="h-4 w-4 mr-1" />
                    Start Quiz
                  </Link>
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <RotateCcw className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizList;