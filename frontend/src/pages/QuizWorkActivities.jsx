import { useContext, useState } from "react";
import { QuizContext } from "../context/QuizContext.jsx";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "Which task sounds most appealing to you?",
    options: [
      { text: "Analyzing reports and numbers", activity: "data" },
      { text: "Helping or guiding people", activity: "people" },
      { text: "Building or fixing systems", activity: "things" },
      { text: "Brainstorming new ideas", activity: "ideas" }
    ]
  },
  {
    question: "You prefer a job where you mostly:",
    options: [
      { text: "Interpret information", activity: "data" },
      { text: "Interact with people", activity: "people" },
      { text: "Work with tools or technology", activity: "things" },
      { text: "Think strategically", activity: "ideas" }
    ]
  },
  {
    question: "Which workday sounds ideal to you?",
    options: [
      { text: "Reviewing data and reports", activity: "data" },
      { text: "Meetings and discussions", activity: "people" },
      { text: "Hands-on technical work", activity: "things" },
      { text: "Planning and ideation", activity: "ideas" }
    ]
  },
  {
    question: "You feel most productive when:",
    options: [
      { text: "Working with facts and figures", activity: "data" },
      { text: "Collaborating with others", activity: "people" },
      { text: "Building something practical", activity: "things" },
      { text: "Creating solutions and strategies", activity: "ideas" }
    ]
  },
  {
    question: "What kind of task energizes you the most?",
    options: [
      { text: "Data analysis", activity: "data" },
      { text: "Mentoring or supporting people", activity: "people" },
      { text: "System design or implementation", activity: "things" },
      { text: "Innovation and planning", activity: "ideas" }
    ]
  },
  {
    question: "You prefer working:",
    options: [
      { text: "Independently with information", activity: "data" },
      { text: "In teams and social settings", activity: "people" },
      { text: "On execution and implementation", activity: "things" },
      { text: "On vision and strategy", activity: "ideas" }
    ]
  },
  {
    question: "What would you rather spend most of your time on?",
    options: [
      { text: "Spreadsheets and dashboards", activity: "data" },
      { text: "Conversations and meetings", activity: "people" },
      { text: "Technical tasks", activity: "things" },
      { text: "Strategic thinking", activity: "ideas" }
    ]
  },
  {
    question: "Your ideal role mainly involves:",
    options: [
      { text: "Analysis", activity: "data" },
      { text: "Service or guidance", activity: "people" },
      { text: "Implementation", activity: "things" },
      { text: "Innovation", activity: "ideas" }
    ]
  },
  {
    question: "Which type of work do you enjoy the most?",
    options: [
      { text: "Data-heavy tasks", activity: "data" },
      { text: "People-centric tasks", activity: "people" },
      { text: "Tool-based tasks", activity: "things" },
      { text: "Conceptual or abstract thinking", activity: "ideas" }
    ]
  },
  {
    question: "Your preferred work style is:",
    options: [
      { text: "Analytical", activity: "data" },
      { text: "Collaborative", activity: "people" },
      { text: "Practical", activity: "things" },
      { text: "Conceptual", activity: "ideas" }
    ]
  }
];

const QuizWorkActivities = () => {
  const { answers, setAnswers } = useContext(QuizContext);
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleOptionClick = (activity) => {
    setAnswers((prev) => ({
      ...prev,
      workActivities: {
        ...prev.workActivities,
        [activity]: prev.workActivities[activity] + 2
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
      <h2 className="text-xl font-bold mb-2">Work Activities Assessment</h2>
      <p className="mb-4 text-gray-600">
        Question {currentQuestion + 1} of {questions.length}
      </p>

      <h3 className="text-lg font-semibold mb-4">{q.question}</h3>

      <div className="flex flex-col gap-3">
        {q.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option.activity)}
            className="border rounded-lg p-3 text-left hover:bg-blue-50 transition"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizWorkActivities;
