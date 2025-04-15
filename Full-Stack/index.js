import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRouter from "./routes/user.routes.js";
import connectDB from "./utils/db.js";

dotenv.config();

//db connected
connectDB();

const app = express();
app.use(
  cors({
    origin: process.env.BASE_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Allow credentials to be included in requests
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// if middleware next not call then the server hang up

app.use(cookieParser());

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Hello world!");
});

//api
app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
