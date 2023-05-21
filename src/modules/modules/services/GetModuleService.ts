import { Module } from '../infra/typeorm/entities/Module'
import { IModuleRepository } from '../repositories/interfaces/IModuleRepository'

export class GetModuleService {
  constructor(private readonly moduleRepository: IModuleRepository) {}

  public async execute(): Promise<Module[]> {
    const module = await this.moduleRepository.findAll()

    return module
  }
}
