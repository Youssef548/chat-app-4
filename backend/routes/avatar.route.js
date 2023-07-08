import { Router } from "express";
import avatarController from "../controllers/avatar.controller.js";
const avatarRouter = Router()

avatarRouter.post("",avatarController.setAvatar)
avatarRouter.get("",avatarController.checkAvatar)



export default avatarRouter