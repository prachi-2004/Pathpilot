// frontend/src/pages/Home.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button";
import { Rocket, Target, BookOpen, BarChart } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  // Updated: handleQuizClick now takes quizType
  const handleQuizClick = (quizType) => {
    console.log(`${quizType} Quiz Button Clicked`);
    navigate(`/quiz/${quizType}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-grow bg-gradient-to-r from-gray-800 to-gray-700 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to PathPilot 🚀
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Your AI-powered career path recommender for a brighter future.
        </p>
        <Link
          to="/dashboard"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-indigo-500 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Why Choose PathPilot?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <div className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <Rocket className="h-10 w-10 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Career Paths</h3>
            <p className="text-gray-300">
              Smart recommendations tailored to your skills and interests.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <Target className="h-10 w-10 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Adaptive Quiz</h3>
            <p className="text-gray-300">
              Discover your strengths with an interactive career quiz.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <BookOpen className="h-10 w-10 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dashboard</h3>
            <p className="text-gray-300">
              Track your learning journey and job opportunities in one place.
            </p>
          </div>

          <div className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <BarChart className="h-10 w-10 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Progress Tracker</h3>
            <p className="text-gray-300">
              Visualize your growth with insights and performance reports.
            </p>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Explore Career Possibilities
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <div className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Interests</h3>
            <p className="text-gray-300 mb-4">
              See where your interests lie, and explore what type of jobs would suit you well.
            </p>
            <Button onClick={() => handleQuizClick("interests")}>Take the quiz</Button>
          </div>

          <div className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Abilities</h3>
            <p className="text-gray-300 mb-4">
              Leverage your strengths. Find out what you are great at, and explore careers that allow you to use your top skills.
            </p>
            <Button onClick={() => handleQuizClick("abilities")}>Take the quiz</Button>
          </div>

          <div className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Work Activities</h3>
            <p className="text-gray-300 mb-4">
              Choose how you prefer to work with data, people, and things, and get a list of possible career options to explore.
            </p>
            <Button onClick={() => handleQuizClick("work-activities")}>Take the quiz</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
