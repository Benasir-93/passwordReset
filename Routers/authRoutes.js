import express from 'express'
const router = express.Router();
import {
  forgotPassword,
  resetPassword,
  registerUser,
} from "../Controllers/authController.js";
router.post("/register", registerUser);

router.post("/forgot-password",forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router
