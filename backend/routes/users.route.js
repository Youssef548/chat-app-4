import { Router } from "express";
import usersController from "../controllers/users.controller.js";
const usersRouter = Router()

usersRouter.get("",usersController.fetchAllUsers)



export default usersRouter