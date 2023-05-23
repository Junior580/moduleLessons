import { Module } from '../infra/typeorm/entities/Module'
import { IModuleRepository } from '../repositories/interfaces/IModuleRepository'
import AppError from '../../../shared/errors/AppError'

interface IRequest {
  id: string
  name: string
}

export class UpdateModuleService {
  constructor(private readonly moduleRepository: IModuleRepository) {}

  public async execute({ id, name }: IRequest): Promise<Module> {
    const module = await this.moduleRepository.findById(id)

    if (!module) {
      throw new AppError('Module does not exists!', 401)
    }

    module.name = name ? name : module.name

    await this.moduleRepository.save(module)

    return module
  }
}
