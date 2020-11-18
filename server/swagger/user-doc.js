/**
 * @swagger
 * securityDefinitions:
 *   Bearer:
 *     type: apiKey
 *     name: USER-KEY
 *     in: header
 * definition:
 *   User:
 *     properties:
 *       data:
 *         type: object
 */
/**
 * @swagger
 * /customer:
 *   get:
 *     tags:
 *       - Users
 *     description: get a user detail
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: User's detail's fetched successfully
 *         schema:
 *           $ref: '#/definitions/User'
 *       400:
 *         description: invalid request body
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */
