import { Router } from 'express'

import { AuthenticateUserController } from '../controllers/AuthenticateUserController'

export const sessionRouter = Router()

const authenticateUserController = new AuthenticateUserController()

sessionRouter.post('/', authenticateUserController.handle)
