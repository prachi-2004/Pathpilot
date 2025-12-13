import { useContext, useState } from "react";
import { QuizContext } from "../context/QuizContext.jsx";
import { useNavigate } from "react-router-dom";

const QuizAbilities = () => {
  const { setAnswers } = useContext(QuizContext);
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const abilities = [
    "Creative Problem-Solving",
    "Team Leadership",
    "Attention to Detail",
    "Data Analysis",
    "Public Speaking & Communication",
  ];

  const toggleSelect = (ability) => {
    setSelected((prev) =>
      prev.includes(ability)
        ? prev.filter((item) => item !== ability)
        : [...prev, ability]
    );
  };

  const finishQuiz = () => {
    setAnswers((prev) => ({
      ...prev,
      abilities: selected,
    }));
    navigate("/results");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Abilities Quiz</h2>
      <p className="mb-4 text-gray-600">
        Select the abilities that describe you best:
      </p>
      <div className="grid gap-4">
        {abilities.map((ability, idx) => (
          <button
            key={idx}
            onClick={() => toggleSelect(ability)}
            className={`p-3 rounded-lg border ${
              selected.includes(ability)
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {ability}
          </button>
        ))}
      </div>
      <button
        onClick={finishQuiz}
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg"
      >
        Finish Quiz
      </button>
    </div>
  );
};

export default QuizAbilities;
