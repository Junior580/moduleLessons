import { AppDataSource } from '../database/data-source'
import { Module } from '../entities/Module'
import AppError from '../errors/AppError'

const repository = AppDataSource.getRepository(Module)

interface IRequest {
  name: string
  userID: string
}

type IResponse = Module

export class CreateModuleService {
  public async execute({ name, userID }: IRequest): Promise<IResponse> {
    const moduleExists = await repository.findOneBy({ name })

    if (moduleExists) {
      throw new AppError('Module already exists', 500)
    }

    const module = repository.create({ userID, name })

    await repository.save(module)

    return module
  }
}
