const User = require('../models/user');
const jwt = require('../utils/jwt');

class AuthService {
  async register(userData) {
    const user = new User(userData);
    return await user.save();
  }

  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    return user;
  }

  generateToken(user) {
    return jwt.generateToken({
      id: user._id,
      email: user.email,
      role: user.role
    });
  }
}

module.exports = new AuthService();