import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { User } from '../../infra/typeorm/entities/User'

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>
  createUser({ name, email, password }: ICreateUserDTO): Promise<User>
}
