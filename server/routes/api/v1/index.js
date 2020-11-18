import express from 'express';


import customer from './user';

const router = express.Router();

// Swagger jsdoc configuration
const swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'Api documentation for Andela vlf challenge.',
  },
  host: 'localhost:3100',
  basePath: '/api/v1',
};


// options for the swagger docs
const options = {

  // import swaggerDefinitions
  swaggerDefinition,

  // path to the API docs
  apis: ['./server/swagger/*.js'],

};

// initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// setup swagger route
router.get('/swagger.json', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// use the users route
router.use('/user', customer);


// api v1 routes
router.get('/', (req, res) => {
  res.send('You\'ve reached api/v1 routes');
});

export default router;
