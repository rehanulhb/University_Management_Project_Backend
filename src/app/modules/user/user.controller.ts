import { NextFunction, Request, Response } from 'express'
import { UserServices } from './user.service'

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

    // Send Response
    res.status(200).json({
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
