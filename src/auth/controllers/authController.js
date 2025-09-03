import authService from '../services/authService.js';

class AuthController {
  /**
   * Register user
   *
   * @param {*} req
   * @param {*} res
   * @memberof AuthController
   */
  async registerUser(req, res) {
    try {
      const { email, password } = req.body;
      const data = await authService.registerUser(email, password);
      res.json({ user: data.user, session: data.session });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  /**
   * Login user
   *
   * @param {*} req
   * @param {*} res
   * @memberof AuthController
   */
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

export default new AuthController();
