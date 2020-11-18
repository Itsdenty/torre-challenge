import express from 'express';
// import Validator from '../../../middlewares/validators/user';
import userController from '../../../controllers/user';


const router = express.Router();

router.get('/:username', userController.getUser);
router.post('/search/people', userController.searchPeople);

export default router;
