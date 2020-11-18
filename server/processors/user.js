/* eslint-disable camelcase */
import database from '../database';
import userErrors from '../utils/userErrors';
import logger from '../utils/logger';


/**
 * @description - Describes the customers of the app, their creation, their editing e.t.c.
 */
class userProcessor {
  /**
   * @description - Creates a new user in the app and assigns a token to them
   * @param{Object} customer - api request
   * @param{Object} res - route response
   * @return{json} the registered user's detail
   */
  static async getUser(username) {
    try {
      // run database function
      const resp = await database.getUser(username);

      // return resp to controller
      return resp;
    } catch (e) {
      // create and throw 500 error
      logger.error(e);
      const err = userErrors.usr1(e, 400);
      throw err;
    }
  }

  static async getPeople(query, body) {
    try {
      // run database function
      const resp = await database.getPeople(query, body);

      // return resp to controller
      return resp;
    } catch (e) {
      // create and throw 500 error
      logger.error(e);
      const err = userErrors.usr1(e, 400);
      throw err;
    }
  }

  static async getOpportunities(query, body) {
    try {
      // run database function
      const resp = await database.getOpportunities(query, body);

      // return resp to controller
      return resp;
    } catch (e) {
      // create and throw 500 error
      logger.error(e);
      const err = userErrors.usr1(e, 400);
      throw err;
    }
  }

  static async getOpportunity(jobId) {
    try {
      // run database function
      const resp = await database.getOpportunity(jobId);

      // return resp to controller
      return resp;
    } catch (e) {
      // create and throw 500 error
      logger.error(e);
      const err = userErrors.usr1(e, 400);
      throw err;
    }
  }
}


export default userProcessor;
