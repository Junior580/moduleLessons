import { Request, Response } from 'express'
import { UserRepository } from '../../typeorm/repositories/UserRepository'
import { CreateUserService } from '../../../services/CreateUserService'

export class CreateUserController {
  public async handle(req: Request, res: Response) {
    const { name, email, password } = req.body

    const userRepo = new UserRepository()

    const createUser = new CreateUserService(userRepo)

    const user = await createUser.execute({ name, email, password })

    return res.status(201).json(user)
  }
}
