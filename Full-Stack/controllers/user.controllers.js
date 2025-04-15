import User from "../models/User.model.js";
import crypto from "crypto";
import sendVerificationEmail, {
  sendResetPasswordEmail,
} from "../utils/mailsender.js";
import sendErrors from "../utils/error.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  //get email, password, name
  //validate them
  //check it in database already there or not
  // create user
  // token store in db
  //send token to client

  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return sendErrors({
      res,
      statusCode: 400,
      message: "All fields are required to filled!",
    });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return sendErrors({
        res,
        statusCode: 400,
        message: "User already exists!",
      });
    }
    const newUser = await User.create({
      name,
      email,
      password,
    });
    if (!newUser) {
      return sendErrors({
        res,
        statusCode: 400,
        message: "Registration failed!",
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
    return sendErrors({
      res,
      message: "Registration failed!",
      error,
    });
  }
};

const verifyUser = async (req, res) => {
  try {
    const { token } = req.params;
    // console.log(token, "token verify");
    if (!token) {
      return sendErrors({
        res,
        message: "Invalid Token!",
        statusCode: 400,
      });
    }
    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return sendErrors({
        res,
        message: "Invalid Token!",
        statusCode: 400,
      });
    }
    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();
    res.status(200).json({
      success: true,
      message: "Verification Successfully",
    });
  } catch (error) {
    return sendErrors({
      res,
      message: "Verification failed",
      error,
    });
  }
};

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return sendErrors({
      res,
      statusCode: 400,
      message: "All fields must be filled!",
    });
  }
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return sendErrors({
        res,
        message: "Invalid credentials!",
        statusCode: 400,
      });
    }
    if (!user.isVerified) {
      return sendErrors({
        res,
        message: "Please verify your email !",
        statusCode: 400,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return sendErrors({
        res,
        message: "Invalid credentials!",
        statusCode: 400,
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "16d",
      }
    );
    res.cookie("secret-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 16 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      success: true,
      message: "Login Successful",
      user: {
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return sendErrors({
      res,
      message: "Failed to login!",
      error,
    });
  }
};

//getMe
const getMe = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return sendErrors({
        res,
        message: "Not authenticated!",
        statusCode: 401,
      });
    }
    const profile = await User.findById(user.id);
    res.status(200).json({
      profile,
    });
  } catch (error) {
    return sendErrors({
      res,
      message: "Error in fetching profile !",
      statusCode: 401,
      error,
    });
  }
};

//logout user

const logout = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return sendErrors({
        res,
        message: "sorry , Not login!",
        statusCode: 401,
      });
    }
    res.cookie("secret-token", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({
      success: true,
      message: "Logout Successful",
    });
  } catch (error) {
    return sendErrors({
      res,
      message: "Failed to logout!",
      error,
    });
  }
};

//forget password
const forgotPassword = async (req, res) => {
  try {
    //email from req.body
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return sendErrors({
        res,
        message: "User doesn't exists",
        statusCode: 404,
      });
    }
    const token = crypto.randomBytes(32).toString("hex");
    // console.log("token=>", token);
    user.resetPassword = token;

    user.resetPasswordExpires = new Date(Date.now() + 24 * 60 * 60 * 1000);
    await user.save();

    await sendResetPasswordEmail({
      to: user.email,
      token,
    });
    res.status(200).json({
      success: true,
      message: "Password reset link sent to your email",
    });
  } catch (error) {
    return sendErrors({
      res,
      message: "Failed to process password reset request",
      error,
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password, confirmPassword } = req.body;
    if (!password || !confirmPassword) {
      return sendErrors({
        res,
        message: "please fill required fields !",
        statusCode: 400,
      });
    }
    if (password !== confirmPassword) {
      return sendErrors({
        res,
        statusCode: 400,
        message: " Password do not match !",
      });
    }
    const user = await User.findOne({
      resetPassword: token,
      resetPasswordExpires: { $gt: new Date() },
    });

    if (!user) {
      return sendErrors({
        res,
        statusCode: 400,
        message: "Invalid or expired reset token",
      });
    }
    user.password = password;
    user.resetPassword = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Password reset successful",
    });
  } catch (error) {
    return sendErrors({
      res,
      message: "Failed to reset password",
      error,
    });
  }
};
export {
  registerUser,
  verifyUser,
  loginUser,
  logout,
  getMe,
  resetPassword,
  forgotPassword,
};
