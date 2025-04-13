function sendErrors({ message, statusCode = 500, res, error }) {
  if (error) {
    console.log(`[Error] ${message}`, error);
  }
  return res.status(statusCode).json({
    message: message || "Something went wrong!",
    success: false,
  });
}

export default sendErrors;
