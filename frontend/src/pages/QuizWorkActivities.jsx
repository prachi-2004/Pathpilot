import { useContext, useState } from "react";
import { QuizContext } from "../context/QuizContext.jsx";
import { useNavigate } from "react-router-dom";

const QuizWorkActivities = () => {
  const { setAnswers } = useContext(QuizContext);
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const activities = [
    "People",
    "Data",
    "Things",
    "Predictable",
    "Unpredictable",
    "Solo",
    "Team-Based",
  ];

  const toggleSelect = (activity) => {
    setSelected((prev) =>
      prev.includes(activity)
        ? prev.filter((item) => item !== activity)
        : [...prev, activity]
    );
  };

  const finishQuiz = () => {
    setAnswers((prev) => ({
      ...prev,
      workActivities: selected,
    }));
    navigate("/results");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Work Activities Quiz</h2>
      <p className="mb-4 text-gray-600">
        Choose the work styles and environments you prefer:
      </p>
      <div className="grid gap-4">
        {activities.map((activity, idx) => (
          <button
            key={idx}
            onClick={() => toggleSelect(activity)}
            className={`p-3 rounded-lg border ${
              selected.includes(activity)
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {activity}
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

export default QuizWorkActivities;
