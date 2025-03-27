import express, { NextFunction, Request, Response } from 'express'
import { UserControllers } from './user.controller'
import { AnyZodObject } from 'zod'
import { creatStudentValidationSchema } from '../student/student.validation'
import validateRequest from '../../middlewares/validateRequest'

const router = express.Router()

//Will Call Controller
router.post(
  '/create-student',
  validateRequest(creatStudentValidationSchema),
  UserControllers.createStudent,
)

export const UserRoutes = router
