import * as dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import 'reflect-metadata'
import express from 'express'
import { AppDataSource } from './database/data-source'
import { indexRoutes } from './routes/index.routes'
import { handleError } from './middlewares/handleError'

AppDataSource.initialize().then(() => {
  const app = express()

  app.use(express.json())

  app.use(indexRoutes)

  app.use(handleError)

  const port = process.env.SERVERPORT || 3000
  return app.listen(port, () => {
    console.log(`🚀 server is running on ${port}!`)
  })
})
