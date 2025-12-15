import { useContext, useState } from "react";
import { QuizContext } from "../context/QuizContext.jsx";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "What kind of task do you enjoy the most?",
    options: [
      { text: "Solving coding or logical problems", domain: "technical" },
      { text: "Designing or writing creative content", domain: "creative" },
      { text: "Analyzing data or reports", domain: "analytical" },
      { text: "Helping or interacting with people", domain: "social" }
    ]
  },
  {
    question: "Which activity sounds most exciting?",
    options: [
      { text: "Building an app or website", domain: "technical" },
      { text: "Creating visuals or videos", domain: "creative" },
      { text: "Finding insights from data", domain: "analytical" },
      { text: "Leading or managing a team", domain: "business" }
    ]
  },
  {
    question: "In a group project, what role do you prefer?",
    options: [
      { text: "Technical implementer", domain: "technical" },
      { text: "Designer or idea generator", domain: "creative" },
      { text: "Planner or analyst", domain: "analytical" },
      { text: "Presenter or coordinator", domain: "social" }
    ]
  },
  {
    question: "What type of problems do you enjoy solving?",
    options: [
      { text: "Software or system problems", domain: "technical" },
      { text: "Creative or visual challenges", domain: "creative" },
      { text: "Logical or numerical problems", domain: "analytical" },
      { text: "People or communication issues", domain: "social" }
    ]
  },
  {
    question: "Which tool would you prefer to work with daily?",
    options: [
      { text: "Code editor", domain: "technical" },
      { text: "Design tools (Figma, Canva)", domain: "creative" },
      { text: "Dashboards or spreadsheets", domain: "analytical" },
      { text: "Management tools", domain: "business" }
    ]
  },
  {
    question: "What motivates you the most?",
    options: [
      { text: "Building functional systems", domain: "technical" },
      { text: "Expressing creativity", domain: "creative" },
      { text: "Discovering insights", domain: "analytical" },
      { text: "Guiding and influencing people", domain: "business" }
    ]
  },
  {
    question: "What type of work environment do you prefer?",
    options: [
      { text: "Focused and independent", domain: "technical" },
      { text: "Flexible and expressive", domain: "creative" },
      { text: "Structured and research-oriented", domain: "analytical" },
      { text: "Collaborative and social", domain: "social" }
    ]
  },
  {
    question: "Which college task do you enjoy the most?",
    options: [
      { text: "Coding assignments", domain: "technical" },
      { text: "Designing presentations", domain: "creative" },
      { text: "Case studies and reports", domain: "analytical" },
      { text: "Group discussions", domain: "social" }
    ]
  },
  {
    question: "How do you prefer to solve problems?",
    options: [
      { text: "Using algorithms and logic", domain: "technical" },
      { text: "Brainstorming ideas", domain: "creative" },
      { text: "Evaluating facts and data", domain: "analytical" },
      { text: "Discussing with people", domain: "social" }
    ]
  },
  {
    question: "Which role sounds most appealing to you?",
    options: [
      { text: "Software Developer", domain: "technical" },
      { text: "UI/UX Designer", domain: "creative" },
      { text: "Data Analyst", domain: "analytical" },
      { text: "Product Manager", domain: "business" }
    ]
  }
];

const QuizInterests = () => {
  const { answers, setAnswers } = useContext(QuizContext);
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleOptionClick = (domain) => {
    setAnswers((prev) => ({
      ...prev,
      interests: {
        ...prev.interests,
        [domain]: prev.interests[domain] + 2
      }
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/results");
    }
  };

  const q = questions[currentQuestion];

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-2">Interest Assessment</h2>
      <p className="mb-4 text-gray-600">
        Question {currentQuestion + 1} of {questions.length}
      </p>

      <h3 className="text-lg font-semibold mb-4">{q.question}</h3>

      <div className="flex flex-col gap-3">
        {q.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option.domain)}
            className="border rounded-lg p-3 text-left hover:bg-blue-50 transition"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizInterests;
