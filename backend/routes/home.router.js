import { Router } from 'express';
import authRouter from './auth.route.js';
import isAuthedMiddleware from '../middlewares/auth/isAuthed.middleware.js';
import friendRouter from './friend.route.js';
import messageRouter from './message.route.js';
const router = Router();

router.use('/auth', authRouter);
router.use('/friends', [isAuthedMiddleware], friendRouter);
router.use('/message', [isAuthedMiddleware], messageRouter);

export default router;
