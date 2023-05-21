import { Repository } from 'typeorm'
import { IUserRepository } from '../../../repositories/interfaces/IUserRepository'
import { User } from '../entities/User'
import { AppDataSource } from '../../../../../shared/infra/typeorm/data-source'
import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO'

export class UserRepository implements IUserRepository {
  private userRepository: Repository<User>
  constructor() {
    this.userRepository = AppDataSource.getRepository(User)
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ email })

    return user
  }

  public async createUser({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = this.userRepository.create({ name, email, password })

    await this.userRepository.save(user)

    return user
  }
}
