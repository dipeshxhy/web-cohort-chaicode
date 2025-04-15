import express from "express";
import {
  forgotPassword,
  getMe,
  loginUser,
  logout,
  registerUser,
  resetPassword,
  verifyUser,
} from "../controllers/user.controllers.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.get("/verify/:token", verifyUser);
userRouter.post("/login", loginUser);
userRouter.get("/me", isLoggedIn, getMe);
userRouter.post("/logout", isLoggedIn, logout);
userRouter.post("/forgotPassword", forgotPassword);
userRouter.post("/resetPassword/:token", resetPassword);

export default userRouter;
