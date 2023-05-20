import { Router, Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUserService'

export const userRoutes = Router()

userRoutes.post('/', async (req: Request, res: Response) => {
  const { name, email, password } = req.body

  const createUser = new CreateUserService()

  const user = await createUser.execute({ name, email, password })

  return res.status(201).json(user)
})
