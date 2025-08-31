// src/components/QuizQuestion.js
import React from "react";

const QuizQuestion = ({ question, selectedOption, onAnswer }) => {
  return (
    <div className="p-4 mb-4 rounded-xl bg-gray-800 text-white">
      <h2 className="text-lg font-semibold mb-2">{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index} className="mb-2">
            <button
              onClick={() => onAnswer(option)}
              className={`w-full text-left p-2 rounded-lg border 
                ${selectedOption === option ? "bg-purple-600 border-purple-400" : "bg-gray-700 border-gray-600"} 
                hover:bg-purple-500`}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizQuestion;
