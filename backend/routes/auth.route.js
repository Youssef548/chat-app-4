import { Router } from "express";
import authController from "../controllers/auth.controller.js"
const authRouter = Router()

authRouter.post("/login",authController.loginPost)
authRouter.post("/register",authController.registerPost)
authRouter.post("/check",authController.check)



export default authRouter