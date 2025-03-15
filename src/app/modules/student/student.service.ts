import { StudentModel } from '../student.model'
import { Student } from './student.interface'

const createStudentIntoDB = async (studnet: Student) => {
  const result = await StudentModel.create(studnet)
  return result
}

export const StudentServices = {
  createStudentIntoDB,
}
