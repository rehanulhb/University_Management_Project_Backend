import { Router } from 'express'
import { StudentRoutes } from '../modules/student/student.route'
import { UserRoutes } from '../modules/user/user.route'
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
