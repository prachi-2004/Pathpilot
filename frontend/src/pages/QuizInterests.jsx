import { useContext } from "react";
import { QuizContext } from "../context/QuizContext.jsx";
import { useNavigate } from "react-router-dom";

const QuizInterests = () => {
  const { answers, setAnswers } = useContext(QuizContext);
  const navigate = useNavigate();

  const handleSelect = (choice) => {
    setAnswers((prev) => ({
      ...prev,
      interests: [...prev.interests, choice],
    }));
  };

  const finishQuiz = () => {
    navigate("/results");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Interests Quiz</h2>
      <button onClick={() => handleSelect("Technology & Innovation")}>
        Technology
      </button>
      <button onClick={() => handleSelect("Arts & Design")}>Arts</button>
      <button onClick={() => handleSelect("Science & Research")}>
        Science
      </button>
      <button onClick={finishQuiz}>Finish</button>
    </div>
  );
};

export default QuizInterests;
