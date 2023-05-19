// import 'express-async-errors'
import 'reflect-metadata'
import express from 'express'
import { AppDataSource } from './database/data-source'

AppDataSource.initialize().then(() => {
  const app = express()

  app.use(express.json())

  return app.listen(3000, () => {
    console.log('🚀 server is running!')
  })
})
