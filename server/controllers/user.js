/* eslint-disable camelcase */
import processor from '../processors/user';
import logger from '../utils/logger';
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
      const getUser = await processor.getUser(req.params.username);
      res.status(200).json(getUser);
    } catch (error) {
      logger.error(error);
      res.status(500).json(error);
    }
  }
}

export default userController;
