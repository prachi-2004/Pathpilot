import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

const careerMapping = {
  "Technology & Innovation": ["Software Developer", "Data Scientist", "Cybersecurity Analyst"],
  "Arts & Design": ["Graphic Designer", "UX/UI Designer", "Content Creator"],
  "Science & Research": ["Research Scientist", "Biomedical Engineer", "Environmental Scientist"],
  "Business & Finance": ["Financial Analyst", "Project Manager", "Entrepreneur"],
  "Social & Community": ["Teacher", "Social Worker", "Public Relations Specialist"],
  "Health & Wellness": ["Nurse", "Psychologist", "Nutritionist"],
  "Creative Problem-Solving": ["Product Designer", "R&D Specialist", "Advertising Strategist"],
  "Team Leadership": ["Project Manager", "Team Lead", "Operations Manager"],
  "Attention to Detail": ["Accountant", "Quality Assurance Tester", "Editor"],
  "Data Analysis": ["Data Analyst", "Market Research Analyst", "Financial Analyst"],
  "Public Speaking & Communication": ["Lawyer", "Sales Manager", "Teacher"],
  "People": ["HR Manager", "Counselor", "Sales Executive"],
  "Data": ["Data Scientist", "Financial Analyst", "Researcher"],
  "Things": ["Engineer", "Product Designer", "Technician"],
  "Predictable": ["Accountant", "Manufacturing Specialist", "Librarian"],
  "Unpredictable": ["Journalist", "Event Planner", "Emergency Responder"],
  "Solo": ["Writer", "Freelancer", "Artist"],
  "Team-Based": ["Software Developer", "Marketing Manager", "Project Manager"],
};

const Results = () => {
  const { answers } = useContext(QuizContext);

  const getRecommendations = () => {
    let careers = [];
    Object.values(answers).flat().forEach((choice) => {
      if (careerMapping[choice]) {
        careers = [...careers, ...careerMapping[choice]];
      }
    });
    return [...new Set(careers)]; // remove duplicates
  };

  const recommendations = getRecommendations();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Career Recommendations</h2>
      <ul className="list-disc pl-6 space-y-2">
        {recommendations.map((career, idx) => (
          <li key={idx} className="text-lg">{career}</li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
