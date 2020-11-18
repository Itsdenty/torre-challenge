import express from 'express';
import Validator from '../../../middlewares/validators/user';


const router = express.Router();

router.get('/', Validator.get);

export default router;
