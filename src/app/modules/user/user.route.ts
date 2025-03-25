import express, { NextFunction, Request, Response } from 'express'
import { UserControllers } from './user.controller'
import { AnyZodObject } from 'zod'
import studentValidationSchema from '../student/student.joi.validation'

const router = express.Router()

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //Validation
    try {
      await schema.parseAsync({
        body: req.body,
      })

      return next()
    } catch (err) {
      next(err)
    }
  }
}

//Will Call Controller
router.post(
  '/create-student',
  validateRequest(studentValidationSchema),
  UserControllers.createStudent,
)

export const UserRoutes = router
