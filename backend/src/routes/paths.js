const express = require('express');
const router = express.Router();
const pathController = require('../controllers/pathController');
const { authenticateToken } = require('../middleware/auth');

router.post('/', authenticateToken, pathController.createPath);
router.get('/', pathController.getAllPaths);
router.get('/:id', pathController.getPathById);
router.put('/:id', authenticateToken, pathController.updatePath);
router.delete('/:id', authenticateToken, pathController.deletePath);

module.exports = router;