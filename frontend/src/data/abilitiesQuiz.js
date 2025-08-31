const abilitiesQuiz = [
  {
    question: "How would you rate your proficiency in the following skills? (Scale: 1 = Low, 5 = High)",
    options: [
      "Public Speaking & Presentation",
      "Data Analysis",
      "Creative Problem-Solving",
      "Team Leadership",
      "Attention to Detail"
    ],
    type: "rating" // special type for slider/scale
  },
  {
    question: "When faced with a difficult challenge, you typically rely on your ability to...",
    options: [
      "Break down the problem into smaller, logical steps.",
      "Brainstorm multiple creative and unconventional ideas.",
      "Connect with people to get different perspectives and help.",
      "Research and analyze all available information."
    ]
  },
  {
    question: "Are you more comfortable with...",
    options: [
      "A job that requires technical skill and precision.",
      "A job that requires persuasion and social skills."
    ]
  },
  {
    question: "Imagine you have to give a presentation. Which part comes most naturally to you?",
    options: [
      "Designing the presentation's look and feel.",
      "Structuring the content and key points.",
      "Delivering the talk with confidence.",
      "Answering complex questions from the audience."
    ]
  },
  {
    question: "In a team project, you are usually the person who...",
    options: [
      "Develops the core technical solution.",
      "Manages the project timeline and tasks.",
      "Ensures the final product is aesthetically pleasing.",
      "Motivates the team and resolves conflicts.",
      "Does the research and collects the data."
    ]
  }
];

export default abilitiesQuiz;
