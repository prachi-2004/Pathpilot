// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from "./components/ScrollToTop"; 
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import LearningPaths from './pages/LearningPaths';
import PathDetails from './pages/PathDetails';
import QuizList from './pages/QuizList';
import QuizTaking from './pages/QuizTaking';
import CareerQuiz from './pages/CareerQuiz';
import Features from './pages/Features';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <main className="flex-grow">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/paths" element={<LearningPaths />} />
              <Route path="/paths/:id" element={<PathDetails />} />
              <Route path="/courses/:courseId/quizzes" element={<QuizList />} />
              <Route path="/quizzes/:quizId/take" element={<QuizTaking />} />
              <Route path="/career-quiz" element={<CareerQuiz />} />
              <Route path="/features" element={<Features />} /> 
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;