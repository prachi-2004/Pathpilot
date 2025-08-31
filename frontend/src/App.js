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
import Features from './pages/Features';
import QuizInterests from "./pages/QuizInterests";
import QuizAbilities from "./pages/QuizAbilities";
import QuizWorkActivities from "./pages/QuizWorkActivities";
import Results from "./pages/Results";
import { QuizProvider } from "./context/QuizContext";
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
            <QuizProvider>
      {
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/paths" element={<LearningPaths />} />
              <Route path="/paths/:id" element={<PathDetails />} />
              <Route path="/features" element={<Features />} /> 
              <Route path="/quiz/interests" element={<QuizInterests />} />
              <Route path="/quiz/abilities" element={<QuizAbilities />} />
              <Route path="/quiz/work-activities" element={<QuizWorkActivities />} />
              <Route path="/results" element={<Results />} />
            </Routes>
            }
    </QuizProvider>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;