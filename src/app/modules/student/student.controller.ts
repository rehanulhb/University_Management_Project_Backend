import { Request, Response } from 'express'
import { StudentServices } from './student.service'
//import Joi from 'joi'
//import studentValidationSchema from './student.validation'
import { z } from 'zod'
import studentValidationSchema from './student.validation'

const createStudent = async (req: Request, res: Response) => {
  try {
    //Creating a schema Validation using zod

    const { student: studentData } = req.body
    //Data validation using Joi
    //const { error, value } = studentValidationSchema.validate(studentData)

    //Data validation using Zod
    const zodparsedData = studentValidationSchema.parse(studentData)

    const result = await StudentServices.createStudentIntoDB(zodparsedData)

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something went wrong',
    //     error: error.details,
    //   })
    // }
    // Will Call Service Function to send this data

    // Send Response
    res.status(200).json({
      success: true,
      message: 'Student is Created Successfully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    })
  }
}

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB()
    res.status(200).json({
      success: true,
      message: 'Students are Retrieved Successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.getSingleStudentFromDB(studentId)
    res.status(200).json({
      success: true,
      message: 'Students is Retrieved Successfully',
      data: result,
    })
  } catch (err) {
    console.log(err)
  }
}

export const StudnetControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
}
