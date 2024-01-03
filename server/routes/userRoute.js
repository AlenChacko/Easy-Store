import { loginUser } from "../controllers/userController.js";
import express from 'express'
const router = express.Router()

router.route("/login").post(loginUser)
export default router