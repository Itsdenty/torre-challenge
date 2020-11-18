import express from 'express';


import customer from './user';

const router = express.Router();

// use the customers route
router.use('/user', customer);


// api v1 routes
router.get('/', (req, res) => {
  res.send('You\'ve reached api/v1 routes');
});

export default router;
