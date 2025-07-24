const Quiz = require('../models/Quiz');
const QuizAttempt = require('../models/QuizAttempt');
const Course = require('../models/Course');

class QuizService {
  async createQuiz(quizData) {
    const quiz = new Quiz(quizData);
    return await quiz.save();
  }

  async getQuizById(quizId) {
    return await Quiz.findById(quizId).populate('course');
  }

  async getQuizzesByCourse(courseId) {
    return await Quiz.find({ course: courseId, isActive: true });
  }

  async updateQuiz(quizId, updateData) {
    return await Quiz.findByIdAndUpdate(quizId, updateData, { new: true });
  }

  async deleteQuiz(quizId) {
    return await Quiz.findByIdAndUpdate(quizId, { isActive: false }, { new: true });
  }

  async startQuizAttempt(userId, quizId) {
    const quiz = await this.getQuizById(quizId);
    if (!quiz) {
      throw new Error('Quiz not found');
    }

    // Check if user has attempts left
    const attempts = await QuizAttempt.countDocuments({
      user: userId,
      quiz: quizId
    });

    if (attempts >= quiz.attemptsAllowed) {
      throw new Error('Maximum attempts reached for this quiz');
    }

    return {
      quizId: quiz._id,
      title: quiz.title,
      description: quiz.description,
      questions: quiz.questions.map(q => ({
        question: q.question,
        options: q.options,
        points: q.points
      })),
      timeLimit: quiz.timeLimit,
      startedAt: new Date()
    };
  }

  async submitQuizAttempt(userId, quizId, answers) {
    const quiz = await this.getQuizById(quizId);
    if (!quiz) {
      throw new Error('Quiz not found');
    }

    // Calculate score
    let correctAnswers = 0;
    let totalPoints = 0;
    let earnedPoints = 0;

    const attemptAnswers = quiz.questions.map((question, index) => {
      const userAnswer = answers.find(a => a.questionIndex === index);
      const isCorrect = userAnswer && userAnswer.selectedOption === question.correctAnswer;
      
      if (isCorrect) {
        correctAnswers++;
        earnedPoints += question.points;
      }
      totalPoints += question.points;

      return {
        questionIndex: index,
        selectedOption: userAnswer ? userAnswer.selectedOption : null,
        isCorrect
      };
    });

    const percentage = Math.round((earnedPoints / totalPoints) * 100);
    const passed = percentage >= quiz.passingScore;

    const attempt = new QuizAttempt({
      user: userId,
      quiz: quizId,
      answers: attemptAnswers,
      score: earnedPoints,
      percentage,
      passed,
      startedAt: new Date(Date.now() - (quiz.timeLimit * 60 * 1000)), // Adjust based on actual start time
      completedAt: new Date(),
      timeTaken: quiz.timeLimit * 60 // Default time taken
    });

    await attempt.save();

    return {
      attemptId: attempt._id,
      score: earnedPoints,
      percentage,
      passed,
      totalPoints,
      correctAnswers: attemptAnswers.filter(a => a.isCorrect).length,
      totalQuestions: quiz.questions.length
    };
  }

  async getUserQuizAttempts(userId, quizId) {
    return await QuizAttempt.find({
      user: userId,
      quiz: quizId
    }).sort({ createdAt: -1 });
  }

  async getQuizStatistics(quizId) {
    const attempts = await QuizAttempt.find({ quiz: quizId });
    
    if (attempts.length === 0) {
      return {
        totalAttempts: 0,
        averageScore: 0,
        passRate: 0,
        highestScore: 0,
        lowestScore: 0
      };
    }

    const totalScores = attempts.reduce((sum, attempt) => sum + attempt.percentage, 0);
    const passedAttempts = attempts.filter(attempt => attempt.passed).length;
    
    return {
      totalAttempts: attempts.length,
      averageScore: Math.round(totalScores / attempts.length),
      passRate: Math.round((passedAttempts / attempts.length) * 100),
      highestScore: Math.max(...attempts.map(a => a.percentage)),
      lowestScore: Math.min(...attempts.map(a => a.percentage))
    };
  }
}

module.exports = new QuizService();