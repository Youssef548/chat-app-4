import { Router } from "express";
import authController from "../controllers/auth.controller.js"
const authRouter = Router()

authRouter.post("/login",authController.loginPost)
authRouter.post("/signup",authController.signupPost)
authRouter.post("/validate",authController.validate)



export default authRouter