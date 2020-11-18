import express from 'express';


const router = express.Router();
router.get('/', (req, res) => {
  res.send('sample user profile endpoint');
});

export default router;
