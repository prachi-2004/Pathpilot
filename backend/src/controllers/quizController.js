const quizService = require('../services/quizService');
const { errorHandler } = require('../middleware/errorHandler');

class QuizController {
  async createQuiz(req, res) {
    try {
      const quiz = await quizService.createQuiz(req.body);
      res.status(201).json({
        success: true,
        data: quiz
      });
    } catch (error) {
      errorHandler(error, req, res);
    }
  }

  async getQuiz(req, res) {
    try {
      const quiz = await quizService.getQuizById(req.params.id);
      if (!quiz) {
        return res.status(404).json({
          success: false,
          message: 'Quiz not found'
        });
      }
      res.json({
        success: true,
         quiz
      });
    } catch (error) {
      errorHandler(error, req, res);
    }
  }

  async getQuizzesByCourse(req, res) {
    try {
      const quizzes = await quizService.getQuizzesByCourse(req.params.courseId);
      res.json({
        success: true,
        data: quizzes
      });
    } catch (error) {
      errorHandler(error, req, res);
    }
  }

  async updateQuiz(req, res) {
    try {
      const quiz = await quizService.updateQuiz(req.params.id, req.body);
      if (!quiz) {
        return res.status(404).json({
          success: false,
          message: 'Quiz not found'
        });
      }
      res.json({
        success: true,
         quiz
      });
    } catch (error) {
      errorHandler(error, req, res);
    }
  }

  async deleteQuiz(req, res) {
    try {
      const quiz = await quizService.deleteQuiz(req.params.id);
      if (!quiz) {
        return res.status(404).json({
          success: false,
          message: 'Quiz not found'
        });
      }
      res.json({
        success: true,
        message: 'Quiz deleted successfully'
      });
    } catch (error) {
      errorHandler(error, req, res);
    }
  }

  async startQuizAttempt(req, res) {
    try {
      const quizData = await quizService.startQuizAttempt(req.user.id, req.params.quizId);
      res.json({
        success: true,
        data: quizData
      });
    } catch (error) {
      errorHandler(error, req, res);
    }
  }

  async submitQuizAttempt(req, res) {
    try {
      const result = await quizService.submitQuizAttempt(
        req.user.id,
        req.params.quizId,
        req.body.answers
      );
      res.json({
        success: true,
         result
      });
    } catch (error) {
      errorHandler(error, req, res);
    }
  }

  async getUserQuizAttempts(req, res) {
    try {
      const attempts = await quizService.getUserQuizAttempts(
        req.user.id,
        req.params.quizId
      );
      res.json({
        success: true,
        data: attempts
      });
    } catch (error) {
      errorHandler(error, req, res);
    }
  }

  async getQuizStatistics(req, res) {
    try {
      const statistics = await quizService.getQuizStatistics(req.params.quizId);
      res.json({
        success: true,
         statistics
      });
    } catch (error) {
      errorHandler(error, req, res);
    }
  }
}

module.exports = new QuizController();