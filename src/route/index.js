import {Router} from 'express';

import userController from '../controller/index';

const router = Router();

router.get('/rates', userController);

export default router;