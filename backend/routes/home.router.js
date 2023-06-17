import { Router } from "express";
import HomeController from "../controllers/home.controller.js";
const router = Router()


router.get("/",HomeController.index)


export default router