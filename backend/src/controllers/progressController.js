const progressService = require('../services/progressService');

class ProgressController {
  async createProgress(req, res) {
    try {
      const progress = await progressService.createProgress({
        ...req.body,
        user: req.user.id
      });
      res.status(201).json({
        success: true,
         progress
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  async getUserProgress(req, res) {
    try {
      const progress = await progressService.getUserProgress(
        req.user.id,
        req.params.courseId
      );
      res.json({
        success: true,
         progress
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  async updateProgress(req, res) {
    try {
      const progress = await progressService.updateProgress(
        req.params.id,
        req.body
      );
      if (!progress) {
        return res.status(404).json({
          success: false,
          message: 'Progress record not found'
        });
      }
      res.json({
        success: true,
        data: progress
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  async getUserAllProgress(req, res) {
    try {
      const progress = await progressService.getUserAllProgress(req.user.id);
      res.json({
        success: true,
         progress
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = new ProgressController();