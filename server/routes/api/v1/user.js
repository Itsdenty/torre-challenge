import express from 'express';
// import Validator from '../../../middlewares/validators/user';
import userController from '../../../controllers/user';


const router = express.Router();

router.get('/:username', userController.getUser);
router.post('/search/people', userController.searchPeople);
router.post('/search/opportunities', userController.searchOpportunities);
router.post('/user/opportunity', userController.getOpportunity);

export default router;
