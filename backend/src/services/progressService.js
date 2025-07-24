const Progress = require('../models/Progress');

class ProgressService {
  async createProgress(progressData) {
    const progress = new Progress(progressData);
    return await progress.save();
  }

  async getUserProgress(userId, courseId) {
    return await Progress.findOne({ user: userId, course: courseId });
  }

  async updateProgress(id, updateData) {
    return await Progress.findByIdAndUpdate(id, updateData, { new: true });
  }

  async getUserAllProgress(userId) {
    return await Progress.find({ user: userId })
      .populate('course', 'title')
      .sort({ lastAccessed: -1 });
  }
}

module.exports = new ProgressService();