import { Router } from "express";
import avatarController from "../controllers/avatar.controller.js";
const avatarRouter = Router()

avatarRouter.post("",avatarController.setAvatar)



export default avatarRouter