import express from 'express';
import Validator from '../../../middlewares/validators/user';
import userController from '../../../controllers/user';


const router = express.Router();

router.get('/', Validator.get, userController.getUser);

export default router;
