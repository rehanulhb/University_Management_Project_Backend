import { Student } from '../student.model'
import { TStudent } from './student.interface'

const createStudentIntoDB = async (studentData: TStudent) => {
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('User already exists!')
  }

  const result = await Student.create(studentData) //built in static method

  // const student = new Student(studentData) // Create an instance

  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists!')
  // }

  // const result = await student.save()
  return result
}

const getAllStudentsFromDB = async () => {
  const result = await Student.find()
  return result
}
const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id })
  return result
}

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
}
