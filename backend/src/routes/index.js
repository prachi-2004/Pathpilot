const express = require('express');
const router = express.Router();

// Import all route files
const authRoutes = require('./auth');
const userRoutes = require('./users');
const pathRoutes = require('./paths');
const progressRoutes = require('./progress');
const quizRoutes = require('./quiz');

// Register routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/paths', pathRoutes);
router.use('/progress', progressRoutes);
router.use('/quizzes', quizRoutes);

module.exports = router;