import { ErrorRequestHandler } from 'express'

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = (err as any).statusCode || 500
  const message = err.message || 'Something went Wrong!'

  res.status(statusCode).json({
    success: false,
    message,
    error: err,
  })
}

export default globalErrorHandler
