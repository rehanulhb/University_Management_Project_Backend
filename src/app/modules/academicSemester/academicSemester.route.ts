import express from 'express'
import { AcademicSemesterControllers } from './academicSemester.controller'

const router = express.Router()

router.post(
  '/create-academic-semester',
  AcademicSemesterControllers.createAcademicSemester,
)

//Will Call Controller

// router.get('/:studentId', StudnetControllers.getSingleStudent)
// router.delete('/:studentId', StudnetControllers.deleteStudent)
// router.get('/', StudnetControllers.getAllStudents)

export const AcademicSemesterRoutes = router
