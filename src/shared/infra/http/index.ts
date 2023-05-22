import 'express-async-errors'
import 'reflect-metadata'
import express from 'express'
import cors from 'cors'

import { AppDataSource } from '../typeorm/data-source'
import { indexRoutes } from './routes/index.routes'
import { handleError } from './middlewares/handleError'

import * as dotenv from 'dotenv'
dotenv.config()

AppDataSource.initialize().then(() => {
  const app = express()

  app.use(cors())

  app.use(express.json())

  app.use(indexRoutes)

  app.use(handleError)

  const port = process.env.SERVERPORT || 3000
  return app.listen(port, () => {
    console.log(`🚀 server is running on ${port}!`)
  })
})
