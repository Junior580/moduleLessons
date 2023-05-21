import { Module } from '../infra/typeorm/entities/Module'
import { IModuleRepository } from '../repositories/interfaces/IModuleRepository'
import AppError from '../../../shared/errors/AppError'

interface IRequest {
  name: string
  userID: string
}

type IResponse = Module

export class CreateModuleService {
  constructor(private readonly moduleRepository: IModuleRepository) {}

  public async execute({ name, userID }: IRequest): Promise<IResponse> {
    const moduleExists = await this.moduleRepository.findByName(name)

    if (moduleExists) {
      throw new AppError('Module already exists', 500)
    }

    const module = await this.moduleRepository.createModule({ name, userID })

    return module
  }
}
