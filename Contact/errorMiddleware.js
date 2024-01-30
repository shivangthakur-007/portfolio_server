export const errorMiddleware = (req, res) => {
  err.statusCode = err.statusCode || 509;
  err.message = err.message || "Something went Wrong";
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    stack: err.stack,
  });
};
