const QuizCard = ({ children, className = "" }) => {
  return <div className={`quiz-card ${className}`}>{children}</div>;
};

export default QuizCard;
