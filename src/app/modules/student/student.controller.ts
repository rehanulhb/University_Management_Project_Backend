import { NextFunction, Request, Response } from 'express'
import { StudentServices } from './student.service'
//import Joi from 'joi'
//import studentValidationSchema from './student.validation'
import { z } from 'zod'

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB()
    res.status(200).json({
      success: true,
      message: 'Students are Retrieved Successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.getSingleStudentFromDB(studentId)
    res.status(200).json({
      success: true,
      message: 'Students is Retrieved Successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.deleteStudentFromDB(studentId)
    res.status(200).json({
      success: true,
      message: 'Students is Deleted Successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const StudnetControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
