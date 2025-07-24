// frontend/src/pages/QuizTaking.js
import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import api from '../services/api';

const QuizTaking = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await api.get(`/quizzes/${quizId}`);
        setQuiz(response.data);
        setTimeLeft(response.data.timeLimit * 60); // Convert to seconds
      } catch (error) {
        console.error('Error fetching quiz:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [quizId]);

  // Memoize handleSubmitQuiz to prevent recreation on every render
  const handleSubmitQuiz = useCallback(async () => {
    try {
      // Calculate score
      let score = 0;
      let totalPoints = 0;
      const questionResults = [];

      quiz.questions.forEach((question, index) => {
        totalPoints += question.points;
        const selectedAnswer = selectedAnswers[index];
        const isCorrect = selectedAnswer === question.correctAnswer;
        if (isCorrect) {
          score += question.points;
        }
        questionResults.push({
          questionId: index,
          selectedAnswer,
          isCorrect,
          correctAnswer: question.correctAnswer
        });
      });

      const percentage = Math.round((score / totalPoints) * 100);
      const passed = percentage >= quiz.passingScore;

      const resultData = {
        score,
        totalPoints,
        percentage,
        passed,
        questionResults,
        timeTaken: quiz.timeLimit * 60 - timeLeft
      };

      setResults(resultData);
      setQuizCompleted(true);

      // Save result to backend
      await api.post(`/quizzes/${quizId}/submit`, {
        answers: selectedAnswers,
        timeTaken: quiz.timeLimit * 60 - timeLeft
      });

    } catch (error) {
      console.error('Error submitting quiz:', error);
    }
  }, [quiz, selectedAnswers, timeLeft, quizId]);

  // Timer effect
  useEffect(() => {
    if (quizStarted && timeLeft > 0 && !quizCompleted) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            handleSubmitQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [quizStarted, timeLeft, quizCompleted, handleSubmitQuiz]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: optionIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading quiz...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{quiz.title}</h1>
            <p className="text-gray-600 mb-6">{quiz.description}</p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{quiz.questions.length}</div>
                  <div className="text-sm text-gray-600">Questions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{quiz.timeLimit}</div>
                  <div className="text-sm text-gray-600">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{quiz.passingScore}%</div>
                  <div className="text-sm text-gray-600">Passing Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{quiz.attemptsAllowed}</div>
                  <div className="text-sm text-gray-600">Attempts</div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <AlertCircle className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-gray-700">
                Once you start, you cannot pause the quiz. Make sure you're ready!
              </p>
            </div>
            
            <button
              onClick={handleStartQuiz}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (quizCompleted && results) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
              results.passed ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {results.passed ? (
                <CheckCircle className="h-12 w-12 text-green-600" />
              ) : (
                <XCircle className="h-12 w-12 text-red-600" />
              )}
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Quiz Completed!
            </h1>
            
            <div className="text-5xl font-bold mb-2">
              <span className={results.passed ? 'text-green-600' : 'text-red-600'}>
                {results.percentage}%
              </span>
              <span className="text-gray-400 text-2xl"> / 100%</span>
            </div>
            
            <p className="text-gray-600 mb-6">
              You scored {results.score} out of {results.totalPoints} points
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">Result:</span>
                <span className={`font-bold ${results.passed ? 'text-green-600' : 'text-red-600'}`}>
                  {results.passed ? 'PASSED' : 'FAILED'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Time Taken:</span>
                <span className="font-bold">
                  {formatTime(results.timeTaken)}
                </span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={() => navigate(`/courses/${quiz.course}`)}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Back to Course
              </button>
              <button
                onClick={() => window.location.reload()}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quiz Header */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold text-gray-900">{quiz.title}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-red-600 font-medium">
                  <Clock className="h-5 w-5 mr-1" />
                  <span>{formatTime(timeLeft)}</span>
                </div>
                <div className="text-sm text-gray-600">
                  Question {currentQuestionIndex + 1} of {quiz.questions.length}
                </div>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="px-4 py-3 bg-gray-50">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              {currentQuestion.question}
            </h2>
            
            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option, index) => (
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
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${
                      selectedAnswer === index
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswer === index && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
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
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className={`px-6 py-2 rounded-lg font-medium ${
                  currentQuestionIndex === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>
              
              {currentQuestionIndex === quiz.questions.length - 1 ? (
                <button
                  onClick={handleSubmitQuiz}
                  disabled={selectedAnswer === undefined}
                  className={`px-6 py-2 rounded-lg font-medium ${
                    selectedAnswer === undefined
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  Submit Quiz
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === undefined}
                  className={`px-6 py-2 rounded-lg font-medium ${
                    selectedAnswer === undefined
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Next Question
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizTaking;