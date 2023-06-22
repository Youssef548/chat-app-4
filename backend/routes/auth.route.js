import { Router } from "express";
import authController from "../controllers/auth.controller.js"
const authRouter = Router()

authRouter.post("/login",authController.loginPost)
authRouter.post("/signup",authController.signupPost)
authRouter.get("/validate",authController.validate)
authRouter.get("/logout",authController.logout)



export default authRouter