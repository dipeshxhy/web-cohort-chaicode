import User from "../models/User.model.js";
import crypto from "crypto";
import sendVerificationEmail from "../utils/mailsender.js";

const registerUser = async (req, res) => {
  //get email, password, name
  //validate them
  //check it in database already there or not
  // create user
  // token store in db
  //send token to client

  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    const newUser = await User.create({
      name,
      email,
      password,
    });
    if (!newUser) {
      return res.status(400).json({
        success: false,
        message: "User registration failed!",
      });
    }
    const token = crypto.randomBytes(32).toString("hex");
    newUser.verificationToken = token;
    await newUser.save();

    await sendVerificationEmail({
      to: newUser.email,
      token,
    });

    console.log("token", token);

    res.status(200).json({
      success: true,
      message: "User Registration Successfully",
    });
  } catch (error) {
    console.log("Error:", error.message);
  }
};

export { registerUser };
