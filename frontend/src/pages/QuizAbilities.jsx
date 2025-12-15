import { useContext, useState } from "react";
import { QuizContext } from "../context/QuizContext.jsx";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "Which task do you complete most confidently?",
    options: [
      { text: "Writing or debugging code", ability: "technical" },
      { text: "Solving logical or numerical problems", ability: "analytical" },
      { text: "Creating designs or content", ability: "creative" },
      { text: "Explaining concepts to others", ability: "communication" }
    ]
  },
  {
    question: "What do people often praise you for?",
    options: [
      { text: "Technical knowledge", ability: "technical" },
      { text: "Logical thinking", ability: "analytical" },
      { text: "Creativity", ability: "creative" },
      { text: "Communication skills", ability: "communication" }
    ]
  },
  {
    question: "Which subject do you perform best in?",
    options: [
      { text: "Programming / Computer Science", ability: "technical" },
      { text: "Mathematics / Statistics", ability: "analytical" },
      { text: "Design / Arts", ability: "creative" },
      { text: "English / Presentations", ability: "communication" }
    ]
  },
  {
    question: "When facing a problem, you usually:",
    options: [
      { text: "Build a technical solution", ability: "technical" },
      { text: "Analyze it step by step", ability: "analytical" },
      { text: "Think of innovative ideas", ability: "creative" },
      { text: "Discuss it with others", ability: "communication" }
    ]
  },
  {
    question: "Which activity feels easiest for you?",
    options: [
      { text: "Learning new tools", ability: "technical" },
      { text: "Working with data", ability: "analytical" },
      { text: "Visualizing ideas", ability: "creative" },
      { text: "Persuading people", ability: "communication" }
    ]
  },
  {
    question: "What strength best describes you?",
    options: [
      { text: "Technical efficiency", ability: "technical" },
      { text: "Precision and accuracy", ability: "analytical" },
      { text: "Original thinking", ability: "creative" },
      { text: "Team communication", ability: "communication" }
    ]
  },
  {
    question: "In a team, you are usually the one who:",
    options: [
      { text: "Implements solutions", ability: "technical" },
      { text: "Plans and evaluates", ability: "analytical" },
      { text: "Generates ideas", ability: "creative" },
      { text: "Coordinates people", ability: "leadership" }
    ]
  },
  {
    question: "Which task do you improve fastest at?",
    options: [
      { text: "Coding challenges", ability: "technical" },
      { text: "Data analysis", ability: "analytical" },
      { text: "Creative work", ability: "creative" },
      { text: "Public speaking", ability: "communication" }
    ]
  },
  {
    question: "What do you feel most confident doing independently?",
    options: [
      { text: "Technical tasks", ability: "technical" },
      { text: "Analytical tasks", ability: "analytical" },
      { text: "Creative tasks", ability: "creative" },
      { text: "Communication tasks", ability: "communication" }
    ]
  },
  {
    question: "Which ability would you proudly list as your top strength?",
    options: [
      { text: "Technical expertise", ability: "technical" },
      { text: "Analytical thinking", ability: "analytical" },
      { text: "Creativity", ability: "creative" },
      { text: "Leadership", ability: "leadership" }
    ]
  }
];

const QuizAbilities = () => {
  const { answers, setAnswers } = useContext(QuizContext);
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleOptionClick = (ability) => {
    setAnswers((prev) => ({
      ...prev,
      abilities: {
        ...prev.abilities,
        [ability]: prev.abilities[ability] + 2
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
      <h2 className="text-xl font-bold mb-2">Abilities Assessment</h2>
      <p className="mb-4 text-gray-600">
        Question {currentQuestion + 1} of {questions.length}
      </p>

      <h3 className="text-lg font-semibold mb-4">{q.question}</h3>

      <div className="flex flex-col gap-3">
        {q.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option.ability)}
            className="border rounded-lg p-3 text-left hover:bg-blue-50 transition"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizAbilities;
