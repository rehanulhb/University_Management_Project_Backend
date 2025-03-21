import { NextFunction, Request, Response } from 'express'
import { UserServices } from './user.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    //Creating a schema Validation using zod

    const { password, student: studentData } = req.body
    //Data validation using Joi
    //const { error, value } = studentValidationSchema.validate(studentData)

    //Data validation using Zod
    // const zodparsedData = studentValidationSchema.parse(studentData)

    const result = await UserServices.createStudentIntoDB(password, studentData)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is Created Successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const UserControllers = {
  createStudent,
}
