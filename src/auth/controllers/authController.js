const authService = require('../services/authService');

class AuthController {
  async registerUser(req, res) {
    try {
      const { email, password } = req.body;
      const data = await authService.registerUser(email, password);
      res.json({ user: data.user, session: data.session });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const data = await authService.loginUser(email, password);
      res.json({ user: data.user, session: data.session });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new AuthController();
