import { Router } from "express";
import friendController from "../controllers/friend.controller.js";
const friendRouter = Router()

friendRouter.get("",friendController.getAllUsers)
// friendRouter.get("/:username",friendController.getUser)
friendRouter.post("/add",friendController.addFriend)
friendRouter.delete("/remove",friendController.removeFriend)



export default friendRouter