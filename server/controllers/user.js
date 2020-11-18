/* eslint-disable camelcase */
import processor from '../processors/user';
/**
 *
 *
 * @class userController
 */
class userController {
  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @memberof userController
   * @returns {*} createuser
   */
  static async getUser(req, res) {
    try {
      const getUser = await processor.createCustomer(req.body);
      res.status(200).json(getUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default userController;
