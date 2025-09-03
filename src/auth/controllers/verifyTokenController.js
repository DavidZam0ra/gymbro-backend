import verifyTokenService from '../services/verifyTokenService.js';

class VerifyTokenController {
  /**
   * Get Token from body
   *
   * @param {*} req
   * @param {*} res
   * @memberof VerifyTokenController
   */
  async getTokenInfo(req, res) {
    const { userToken } = req.body;

    const userData = await verifyTokenService.verifyToken(userToken);

    res.json({ userData });
  }
}

export default new VerifyTokenController();