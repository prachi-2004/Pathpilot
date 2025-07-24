const pathService = require('../services/pathService');

class PathController {
  async createPath(req, res) {
    try {
      const path = await pathService.createPath(req.body);
      res.status(201).json({
        success: true,
         path
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  async getAllPaths(req, res) {
    try {
      const paths = await pathService.getAllPaths();
      res.json({
        success: true,
        data: paths
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  async getPathById(req, res) {
    try {
      const path = await pathService.getPathById(req.params.id);
      if (!path) {
        return res.status(404).json({
          success: false,
          message: 'Learning path not found'
        });
      }
      res.json({
        success: true,
         path
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  async updatePath(req, res) {
    try {
      const path = await pathService.updatePath(req.params.id, req.body);
      if (!path) {
        return res.status(404).json({
          success: false,
          message: 'Learning path not found'
        });
      }
      res.json({
        success: true,
        data: path
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  async deletePath(req, res) {
    try {
      const path = await pathService.deletePath(req.params.id);
      if (!path) {
        return res.status(404).json({
          success: false,
          message: 'Learning path not found'
        });
      }
      res.json({
        success: true,
        message: 'Learning path deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = new PathController();