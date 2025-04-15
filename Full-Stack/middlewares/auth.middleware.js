import sendErrors from "../utils/error.js";
import jwt from "jsonwebtoken";

const isLoggedIn = async (req, res, next) => {
  try {
    console.log("checking isLoggedIn");
    const token = req.cookies["secret-token"];
    console.log("Token=>", token);
    if (!token) {
      console.log("Token Not Found");
      return sendErrors({
        res,
        statusCode: 401,
        message: "Unauthorized, please login first!",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded=>", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("Authentication failed !");
    return sendErrors({
      res,
      error,
      message: "Internal server error",
    });
  }
};

export { isLoggedIn };
