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

export const StudnetControllers = {
  createStudent,
}
