import { AppDataSource } from '../database/data-source'
import { User } from '../entities/User'
import { jwt } from '../config/auth'
import { sign } from 'jsonwebtoken'
import AppError from '../errors/AppError'
import { compare } from 'bcryptjs'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: User
  token: string
}

const repository = AppDataSource.getRepository(User)

export class AuthenticateUserService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await repository.findOneBy({ email })

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401)
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401)
    }

    const { secret, expiresIn } = jwt

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    })

    return { user, token }
  }
}
