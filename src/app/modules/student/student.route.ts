import express from 'express'
import { StudnetControllers } from './student.controller'

const router = express.Router()

//Will Call Controller
router.post('/create-student', StudnetControllers.createStudent)
router.get('/', StudnetControllers.getAllStudents)
router.get('/:studentId', StudnetControllers.getSingleStudent)

export const StudentRoutes = router
