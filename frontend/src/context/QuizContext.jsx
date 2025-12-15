import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [answers, setAnswers] = useState({
    interests: {
      technical: 0,
      creative: 0,
      analytical: 0,
      social: 0,
      business: 0
    },
    abilities: {
      technical: 0,
      analytical: 0,
      creative: 0,
      communication: 0,
      leadership: 0
    },
    workActivities: {
      data: 0,
      people: 0,
      things: 0,
      ideas: 0
    }
  });

  const resetQuiz = () => {
    setAnswers({
      interests: {
        technical: 0,
        creative: 0,
        analytical: 0,
        social: 0,
        business: 0
      },
      abilities: {
        technical: 0,
        analytical: 0,
        creative: 0,
        communication: 0,
        leadership: 0
      },
      workActivities: {
        data: 0,
        people: 0,
        things: 0,
        ideas: 0
      }
    });
  };

  return (
    <QuizContext.Provider value={{ answers, setAnswers, resetQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};
