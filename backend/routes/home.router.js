import { Router } from 'express';
import authRouter from './auth.route.js';
import isAuthedMiddleware from '../middlewares/auth/isAuthed.middleware.js';
import friendRouter from './friend.route.js';
import messageRouter from './message.route.js';
import avatarRouter from './avatar.route.js';
import usersRouter from './users.route.js';
const router = Router();

router.use('/auth', authRouter);
router.use('/friends', [isAuthedMiddleware], friendRouter);
router.use('/message', [isAuthedMiddleware], messageRouter);
router.use('/avatar', [isAuthedMiddleware], avatarRouter);
router.use('/users', [isAuthedMiddleware], usersRouter);
export default router;
