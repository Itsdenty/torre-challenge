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
 * /customers:
 *   post:
 *     tags:
 *       - Customers
 *     description: Register a new customer
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: customer
 *         description: customer registration details
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - email
 *             - password
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *               format: email
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: Customer Successfully registered
 *         schema:
 *           type: object
 *           properties:
 *             customer:
 *               type: object
 *               properties:
 *                 schema:
 *                   $ref: '#/definitions/Customer'
 *               description: The customer details
 *             accessToken:
 *               type: string
 *               description: The customer authentication token.
 *             expires_in:
 *               type: string
 *               description: The access token expiration time
 *       400:
 *         description: invalid request body
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */
/**
 * @swagger
 * /customers/login:
 *   post:
 *     tags:
 *       - Customers
 *     description: Login a customer
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: customer
 *         description: customer login credentials
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *               format: email
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: Customer successfully logged in
 *         schema:
 *           type: object
 *           properties:
 *             customer:
 *               type: object
 *               properties:
 *                 schema:
 *                   $ref: '#/definitions/Customer'
 *               description: The customer details
 *             accessToken:
 *               type: string
 *               description: The customer authentication token.
 *             expires_in:
 *               type: string
 *               description: The access token expiration time
 *       400:
 *         description: invalid request body
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */
/**
 * @swagger
 * /customer:
 *   put:
 *     tags:
 *       - Customers
 *     description: Update an existing customer
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: customer
 *         description: customer detail update payload
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - email
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *               format: email
 *             password:
 *               type: string
 *             day_phone:
 *               type: string
 *             eve_phone:
 *               type: string
 *             mob_phone:
 *               type: string
 *     responses:
 *       200:
 *         description: Customer Successfully registered
 *         schema:
 *           type: object
 *           properties:
 *             customer:
 *               type: object
 *               properties:
 *                 schema:
 *                   $ref: '#/definitions/Customer'
 *               description: The customer details
 *             accessToken:
 *               type: string
 *               description: The customer authentication token.
 *             expires_in:
 *               type: string
 *               description: The access token expiration time
 *       400:
 *         description: invalid request body
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */
/**
 * @swagger
 * /customers/address:
 *   put:
 *     tags:
 *       - Customers
 *     description: Update an existing customer address
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: customer
 *         description: customer address update payload
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - address_1
 *             - city
 *             - region
 *             - postal_code
 *             - country
 *             - shipping_region_id
 *           properties:
 *             address_1:
 *               type: string
 *             address_2:
 *               type: string
 *             city:
 *               type: string
 *             region:
 *               type: string
 *             postal_code:
 *               type: string
 *             country:
 *               type: string
 *             shipping_region_id:
 *               type: number
 *     responses:
 *       200:
 *         description: Customer's Details Successfully updated
 *         schema:
 *           $ref: '#/definitions/Customer'
 *       400:
 *         description: invalid request body
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */

/**
 * @swagger
 * /customer:
 *   put:
 *     tags:
 *       - Customers
 *     description: Update an existing customer
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: customer
 *         description: customer detail update payload
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - email
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *               format: email
 *             password:
 *               type: string
 *             day_phone:
 *               type: string
 *             eve_phone:
 *               type: string
 *             mob_phone:
 *               type: string
 *     responses:
 *       200:
 *         description: Customer's Address Successfully updated
 *         schema:
 *           type: object
 *           properties:
 *             customer:
 *               type: object
 *               properties:
 *                 schema:
 *                   $ref: '#/definitions/Customer'
 *               description: The customer details
 *             accessToken:
 *               type: string
 *               description: The customer authentication token.
 *             expires_in:
 *               type: string
 *               description: The access token expiration time
 *       400:
 *         description: invalid request body
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */
/**
 * @swagger
 * /customers/card:
 *   put:
 *     tags:
 *       - Customers
 *     description: Update an existing customer address
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: customer
 *         description: customer card update payload
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - credit_card
 *           properties:
 *             credit_card:
 *               type: string
 *     responses:
 *       200:
 *         description: Customer's Credit Card Successfully updated
 *         schema:
 *           $ref: '#/definitions/Customer'
 *       400:
 *         description: invalid request body
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */
 /**
 * @swagger
 * /customer:
 *   get:
 *     tags:
 *       - Customers
 *     description: Update an existing customer address
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Customer's Credit Card Successfully updated
 *         schema:
 *           $ref: '#/definitions/Customer'
 *       400:
 *         description: invalid request body
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */
