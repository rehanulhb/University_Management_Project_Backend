import { NextFunction, Request, RequestHandler, Response } from 'express'
import { StudentServices } from './student.service'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'

const getAllStudents: RequestHandler = async (req, res, next) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB()
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Students is Retrieved Successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
const getSingleStudent: RequestHandler = async (req, res, next) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.getSingleStudentFromDB(studentId)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Students is Retrieved Successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}
const deleteStudent: RequestHandler = async (req, res, next) => {
  try {
    const { studentId } = req.params
    const result = await StudentServices.deleteStudentFromDB(studentId)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Students is Retrieved Successfully',
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
