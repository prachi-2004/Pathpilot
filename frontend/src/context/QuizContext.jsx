import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [answers, setAnswers] = useState({
    interests: [],
    abilities: [],
    workActivities: [],
  });

  return (
    <QuizContext.Provider value={{ answers, setAnswers }}>
      {children}
    </QuizContext.Provider>
  );
};
