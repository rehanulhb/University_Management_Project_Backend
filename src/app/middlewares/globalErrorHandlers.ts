import { Request, Response, NextFunction } from 'express'

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const statusCode = 500
  const message = err.message || 'Something went Wrong!'

  res.status(statusCode).json({
    success: false,
    message,
    error: err,
  })
}

export default globalErrorHandler
