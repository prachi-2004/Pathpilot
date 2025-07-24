const User = require('../models/user');

class UserService {
  async getAllUsers() {
    return await User.find({ isActive: true }).select('-password');
  }

  async getUserById(id) {
    return await User.findById(id).select('-password');
  }

  async updateUser(id, updateData) {
    // Remove password from update data for security
    const { password, ...updateFields } = updateData;
    return await User.findByIdAndUpdate(id, updateFields, { new: true });
  }

  async deleteUser(id) {
    return await User.findByIdAndUpdate(id, { isActive: false }, { new: true });
  }
}

module.exports = new UserService();