import { useContext } from "react";
import { QuizContext } from "../context/QuizContext.jsx";

const careerMap = {
  technical: ["Software Engineer", "AI Engineer", "Web Developer"],
  creative: ["UI/UX Designer", "Content Creator", "Graphic Designer"],
  analytical: ["Data Analyst", "Business Analyst", "Researcher"],
  social: ["HR Manager", "Teacher", "Counselor"],
  business: ["Product Manager", "Consultant", "Entrepreneur"],

  communication: ["Public Relations Specialist", "Trainer", "Sales Engineer"],
  leadership: ["Project Manager", "Team Lead", "Operations Manager"],

  data: ["Data Scientist", "Market Research Analyst"],
  people: ["HR Manager", "Consultant", "Customer Success Manager"],
  things: ["Software Engineer", "DevOps Engineer", "System Architect"],
  ideas: ["Product Manager", "Strategist", "Startup Founder"]
};

const getTopDomains = (domainScores, count = 2) => {
  return Object.entries(domainScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([domain]) => domain);
};

const Results = () => {
  const { answers } = useContext(QuizContext);

  const topInterests = getTopDomains(answers.interests);
  const topAbilities = getTopDomains(answers.abilities);
  const topWorkStyles = getTopDomains(answers.workActivities, 1);

  const recommendedCareers = [
    ...topInterests,
    ...topAbilities,
    ...topWorkStyles
  ]
    .flatMap((domain) => careerMap[domain] || [])
    .filter((career, index, self) => self.indexOf(career) === index);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        Your Personalized Career Recommendations
      </h2>

      {/* Summary */}
      <div className="mb-6 bg-gray-100 p-4 rounded-lg">
        <p>
          <strong>Top Interests:</strong> {topInterests.join(", ")}
        </p>
        <p>
          <strong>Top Abilities:</strong> {topAbilities.join(", ")}
        </p>
        <p>
          <strong>Preferred Work Style:</strong> {topWorkStyles[0]}
        </p>
      </div>

      {/* Career List */}
      <ul className="list-disc pl-6 space-y-2">
        {recommendedCareers.map((career, idx) => (
          <li key={idx} className="text-lg">
            {career}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
