import { User } from '../infra/typeorm/entities/User'
import { jwt } from '../../../config/auth'
import { sign } from 'jsonwebtoken'
import { compare } from 'bcryptjs'
import AppError from '../../../shared/errors/AppError'
import { IUserRepository } from '../repositories/interfaces/IUserRepository'

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: User
  token: string
}

export class AuthenticateUserService {
  constructor(private readonly userRepo: IUserRepository) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepo.findByEmail(email)

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
