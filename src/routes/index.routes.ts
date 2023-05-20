import { Router } from 'express'

import { userRoutes } from './users.routes'
import { sessionRouter } from './sessions.routes'
import { moduleRoutes } from './modules.routes'
import { lessonRoutes } from './lessons.routes'

export const indexRoutes = Router()

indexRoutes.use('/users', userRoutes)
indexRoutes.use('/sessions', sessionRouter)
indexRoutes.use('/modules', moduleRoutes)
indexRoutes.use('/lessons', lessonRoutes)
