import express from "express";
import { login, logout } from "../controllers/auth.controller.js";
const router = express.Router();
router.route("/auth/login").post(login);
router.route("/auth/logout").get(logout);
export default router;
