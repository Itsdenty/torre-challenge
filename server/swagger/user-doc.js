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
 *       person:
 *         type: object
 *       stats:
 *         type: object
 *       interests:
 *         type: array
 *         items:
 *           type: object
 *         example: []
 *       experiences:
 *         type: array
 *         items:
 *           type: object
 *         example: []
 *       awards:
 *         type: array
 *         items:
 *           type: object
 *         example: []
 *       jobs:
 *         type: array
 *         items:
 *           type: object
 *         example: []
 *       projects:
 *         type: array
 *         items:
 *           type: object
 *         example: []
 *       publication:
 *         type: array
 *         items:
 *           type: object
 *         example: []
 *       education:
 *         type: array
 *         items:
 *           type: object
 *         example: []
 *       opportunities:
 *         type: array
 *         items:
 *           type: object
 *         example: []
 *       languages:
 *         type: array
 *         items:
 *           type: object
 *         example: []
 *       personalityTraitsResult:
 *         type: object
 *       professionalCultureGenomeResult:
 *         type: object
 *   ErrorObject:
 *     properties:
 *       code:
 *         type: string
 *       message:
 *         type: string
 *       field:
 *         type: string
 *       status:
 *         type: string
 */
/**
 * @swagger
 * /user:
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
