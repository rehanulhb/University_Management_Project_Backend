import { Request, Response } from 'express'
import { StudentServices } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body

    // Will Call Service Function to send this data
    const result = await StudentServices.createStudentIntoDB(studentData)
    // Send Response
    res.status(200).json({
      success: true,
      message: 'Student is Created Successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
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
  } catch (error) {
    console.log(error)
  }
}

export const StudnetControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
}
