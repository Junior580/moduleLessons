import { Router } from 'express'
import { userRoutes } from './users.routes'
import { sessionsRouter } from './sessions.routes'

export const indexRoutes = Router()

indexRoutes.use('/users', userRoutes)
indexRoutes.use('/sessions', sessionsRouter)
