import { Repository } from 'typeorm'
import { ICreateModuleDTO } from '../../../dtos/ICreateModuleDTO'
import { IModuleRepository } from '../../../repositories/interfaces/IModuleRepository'
import { Module } from '../entities/Module'
import { AppDataSource } from '../../../../../shared/infra/typeorm/data-source'

export class ModuleRepository implements IModuleRepository {
  private moduleRepository: Repository<Module>

  constructor() {
    this.moduleRepository = AppDataSource.getRepository(Module)
  }

  public async findAll(): Promise<Module[]> {
    const module = await this.moduleRepository.find()

    return module
  }

  public async findByName(name: string): Promise<Module | null> {
    const module = await this.moduleRepository.findOneBy({ name })

    return module
  }

  public async createModule({
    name,
    userID,
  }: ICreateModuleDTO): Promise<Module> {
    const module = this.moduleRepository.create({ name, userID })

    await this.moduleRepository.save(module)

    return module
  }

  public async findById(id: string): Promise<Module | null> {
    const module = await this.moduleRepository.findOneBy({ id })

    return module
  }

  public async save(module: Module) {
    await this.moduleRepository.save(module)
  }

  public async delete(id: string): Promise<void> {
    await this.moduleRepository.delete(id)
  }
}
