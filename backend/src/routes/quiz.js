const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');
const { authenticateToken } = require('../middleware/auth');

// Public routes
router.get('/:id', quizController.getQuiz);
router.get('/course/:courseId', quizController.getQuizzesByCourse);

// Protected routes
router.use(authenticateToken);

// Quiz management (admin/teacher)
router.post('/', quizController.createQuiz);
router.put('/:id', quizController.updateQuiz);
router.delete('/:id', quizController.deleteQuiz);

// Quiz taking
router.post('/:id/start', quizController.startQuizAttempt);
router.post('/:id/submit', quizController.submitQuizAttempt);

// User attempts
router.get('/:id/attempts', quizController.getUserQuizAttempts);
router.get('/:id/statistics', quizController.getQuizStatistics);

module.exports = router;