import { Schema, model, connect, Model, Types } from 'mongoose'

export type TUserName = {
  firstName: string
  middleName?: string
  lastName: string
}

export type TGuardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}

export type TLocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}

export type TStudent = {
  id: string
  user: Types.ObjectId
  password: string
  name: TUserName
  gender: 'male' | 'female' | 'other'
  dateOfBirth?: Date
  email: string
  contactNo: string
  emergencyContactNo: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  permanentAddress: string
  guardian: TGuardian
  localGuardian: TLocalGuardian
  profileImg?: string
  isDeleted: boolean
}

//For Creating Static
export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>
}

//For Creating Instance

// export type StudentMethods = {
//   isUserExists(id: string): Promise<TStudent | null>
// }

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >
