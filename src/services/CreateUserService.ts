//transportar para dentro do repostiory
import { AppDataSource } from '../database/data-source'
import { Users } from '../entities/Users'
import { hash } from 'bcryptjs'
import AppError from '../errors/AppError'

const repository = AppDataSource.getRepository(Users)
//apagar

interface ICreateUserRequest {
  name: string
  email: string
  password: string
}

export class CreateUserService {
  public async execute({
    name,
    email,
    password,
  }: ICreateUserRequest): Promise<Users> {
    const userExists = await repository.findOneBy({ email })

    if (userExists) {
      throw new AppError('User already exists', 500)
    }

    const hashedPass = await hash(password, 8)

    const user = repository.create({
      name,
      email,
      password: hashedPass,
    })

    await repository.save(user)

    return user
  }
}
