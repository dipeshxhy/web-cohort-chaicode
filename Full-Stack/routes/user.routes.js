import express from "express";
import {
  loginUser,
  registerUser,
  verifyUser,
} from "../controllers/user.controllers.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.get("/verify/:token", verifyUser);
userRouter.post("/login", loginUser);

export default userRouter;
