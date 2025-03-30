import express from 'express'
import { AcademicSemesterControllers } from './academicSemester.controller'
import validateRequest from '../../middlewares/validateRequest'
import { AcademicSemestervalidations } from './academicSemester.validation'

const router = express.Router()

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemestervalidations.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
)

//Will Call Controller

// router.get('/:studentId', StudnetControllers.getSingleStudent)
// router.delete('/:studentId', StudnetControllers.deleteStudent)
// router.get('/', StudnetControllers.getAllStudents)

export const AcademicSemesterRoutes = router
