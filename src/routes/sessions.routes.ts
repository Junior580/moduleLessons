import { Router, Request, Response } from 'express'
import { AuthenticateUserService } from '../services/AuthenticateUserService'

export const sessionRouter = Router()

sessionRouter.post('/', async (req: Request, res: Response) => {
  const { email, password } = req.body

  const authenticateUser = new AuthenticateUserService()

  const { token, user } = await authenticateUser.execute({ email, password })

  return res.status(201).json({
    user,
    token,
  })
})
