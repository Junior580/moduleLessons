import { Router } from 'express'

import { userRoutes } from '../../../../modules/users/infra/http/routes/users.routes'
import { sessionRouter } from '../../../../modules/users/infra/http/routes/sessions.routes'
import { moduleRoutes } from '../../../../modules/modules/infra/http/routes/modules.routes'
import { lessonRoutes } from '../../../../modules/lessons/infra/http/routes/lessons.routes'

export const indexRoutes = Router()

indexRoutes.use('/users', userRoutes)
indexRoutes.use('/sessions', sessionRouter)
indexRoutes.use('/modules', moduleRoutes)
indexRoutes.use('/lessons', lessonRoutes)
