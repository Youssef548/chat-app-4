import { Router } from "express";
import messageController from "../controllers/message.controller.js";
const messageRouter = Router()

messageRouter.get("",messageController.fetch)
messageRouter.post("/send",messageController.send)


 

export default messageRouter