import { Router } from "express";
import authRouter from "./auth.route.js"
import isAuthedMiddleware from "../middlewares/auth/isAuthed.middleware.js";
const router = Router()

router.use("/auth",authRouter)
router.use("/friend",[isAuthedMiddleware],authRouter)


export default router