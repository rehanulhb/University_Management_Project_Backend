import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { StudentRoutes } from './app/modules/student/student.route'
import { UserRoutes } from './app/modules/user/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandlers'

const app: Application = express()

//
app.use(express.json())
app.use(cors())

//Application Route
app.use('/api/v1/students', StudentRoutes)
app.use('/api/v1/users', UserRoutes)

const getAController = (req: Request, res: Response) => {
  res.send('Hello World!')
}

app.get('/', getAController)

app.use(globalErrorHandler)

export default app
