const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');
const { authenticateToken } = require('../middleware/auth');

router.post('/', authenticateToken, progressController.createProgress);
router.get('/course/:courseId', authenticateToken, progressController.getUserProgress);
router.put('/:id', authenticateToken, progressController.updateProgress);
router.get('/', authenticateToken, progressController.getUserAllProgress);

module.exports = router;