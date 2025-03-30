import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandlers'
import notFound from './app/middlewares/notFound'
import router from './app/routes'

const app: Application = express()

//
app.use(express.json())
app.use(cors())

//Application Route
app.use('/api/v1', router)

const test = (req: Request, res: Response) => {
  res.send('Hello World!')
}

app.get('/', test)

app.use(globalErrorHandler)

//Not Found Route
app.use(notFound)

export default app
