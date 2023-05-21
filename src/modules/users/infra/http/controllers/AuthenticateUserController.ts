import { Request, Response } from 'express'
import { AuthenticateUserService } from '../../../services/AuthenticateUserService'
import { UserRepository } from '../../typeorm/repositories/UserRepository'

export class AuthenticateUserController {
  public async handle(req: Request, res: Response) {
    const { email, password } = req.body

    const userRepo = new UserRepository()

    const authenticateUser = new AuthenticateUserService(userRepo)

    const { token, user } = await authenticateUser.execute({ email, password })

    return res.status(201).json({
      user,
      token,
    })
  }
}
