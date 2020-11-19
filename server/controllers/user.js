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

  static async searchPeople(req, res) {
    try {
      const query = {
        offset: req.offset || 0,
        size: req.page || 0,
      };
      const getPeople = await processor.getPeople(query, req.body);
      res.status(200).json(getPeople);
    } catch (error) {
      logger.error(error);
      res.status(500).json(error);
    }
  }

  static async searchOpportunities(req, res) {
    try {
      const query = {
        offset: req.offset || 0,
        size: req.page || 0,
      };
      const getOpportunities = await processor.getOpportunities(query, req.body);
      res.status(200).json(getOpportunities);
    } catch (error) {
      logger.error(error);
      res.status(500).json(error);
    }
  }

  static async getOpportunity(req, res) {
    try {
      const getOpportunity = await processor.getOpportunity(req.params.jobId);
      res.status(200).json(getOpportunity);
    } catch (error) {
      logger.error(error);
      res.status(500).json(error);
    }
  }
}

export default userController;
