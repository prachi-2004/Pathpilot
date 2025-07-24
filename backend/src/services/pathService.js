const LearningPath = require('../models/LearningPath');

class PathService {
  async createPath(pathData) {
    const path = new LearningPath(pathData);
    return await path.save();
  }

  async getAllPaths() {
    return await LearningPath.find({ isActive: true }).populate('instructor', 'username');
  }

  async getPathById(id) {
    return await LearningPath.findById(id)
      .populate('instructor', 'username')
      .populate('courses');
  }

  async updatePath(id, updateData) {
    return await LearningPath.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deletePath(id) {
    return await LearningPath.findByIdAndUpdate(id, { isActive: false }, { new: true });
  }
}

module.exports = new PathService();