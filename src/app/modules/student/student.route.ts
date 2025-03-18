import express from 'express'
import { StudnetControllers } from './student.controller'

const router = express.Router()

//Will Call Controller
router.post('/create-student', StudnetControllers.createStudent)

router.get('/:studentId', StudnetControllers.getSingleStudent)
router.delete('/:studentId', StudnetControllers.deleteStudent)
router.get('/', StudnetControllers.getAllStudents)

export const StudentRoutes = router
