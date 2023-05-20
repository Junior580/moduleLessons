import { Router, Request, Response } from 'express'
import { AuthenticateUserService } from '../services/AuthenticateUserService'

export const sessionsRouter = Router()

sessionsRouter.post('/', async (req: Request, res: Response) => {
  const { name, email, password } = req.body

  const authenticateUser = new AuthenticateUserService()

  // const { token, user } = await authenticateUser.execute({ email, password })
  const user = await authenticateUser.execute({ email, password })

  return res.status(201).json({
    user: user,
  })
})
