import express from 'express'
import { StudnetControllers } from './student.controller'

const router = express.Router()

//Will Call Controller
router.post('/create-student', StudnetControllers.createStudent)

export const StudentRoutes = router
