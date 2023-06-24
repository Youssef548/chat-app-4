import { Router } from "express";
import friendController from "../controllers/friend.controller.js";
const friendRouter = Router()

friendRouter.get("",friendController.getAllUsers)




export default friendRouter