/* eslint-disable camelcase */
import database from '../database';
import userErrors from '../utils/userErrors';


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
  static async createUser(user) {
    try {
      // run query to save data to database

      // run database function
      const resp = await database.getUser(user);

      // return resp to controller
      return resp;
    } catch (e) {
      // create and throw 500 error
      const err = userErrors.usr1('password', 400);
      throw err;
    }
  }
}

export default userProcessor;
