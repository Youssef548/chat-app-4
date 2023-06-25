import { Router } from "express";
import authRouter from "./auth.route.js"
import isAuthedMiddleware from "../middlewares/auth/isAuthed.middleware.js";
import friendRouter from "./friend.route.js";
const router = Router()

router.use("/auth",authRouter)
router.use("/friends",[isAuthedMiddleware],friendRouter)


export default router