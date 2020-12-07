import { Router } from 'express';

import rootController from '../controllers/rootController';
import authController from '../controllers/authController';
import postsController from '../controllers/postsController';
import logoutController from '../controllers/logoutController';
import isAuthorized from '../middlewares/isAuthorized';

function rootRouter() {
  const router = Router();

  router.get('/', rootController);

  router.post('/authorize', authController);
  router.post('/logout', logoutController);

  router.get('/posts', isAuthorized, postsController);

  return router;
}

export default rootRouter();
