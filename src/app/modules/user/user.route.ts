import express from 'express'
import { UserControllers } from './user.controller'

const router = express.Router()

//Will Call Controller
router.post('/create-student', UserControllers.createStudent)

export const UserRoutes = router
