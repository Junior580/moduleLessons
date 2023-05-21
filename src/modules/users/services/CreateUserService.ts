import { User } from '../infra/typeorm/entities/User'
import { hash } from 'bcryptjs'
import AppError from '../../../shared/errors/AppError'
import { IUserRepository } from '../repositories/interfaces/IUserRepository'

interface ICreateUserRequest {
  name: string
  email: string
  password: string
}

export class CreateUserService {
  constructor(private readonly userRepo: IUserRepository) {}
  public async execute({
    name,
    email,
    password,
  }: ICreateUserRequest): Promise<User> {
    const userExists = await this.userRepo.findByEmail(email)

    if (userExists) {
      throw new AppError('User already exists', 500)
    }

    const hashedPass = await hash(password, 8)

    const user = await this.userRepo.createUser({
      name,
      email,
      password: hashedPass,
    })

    return user
  }
}
