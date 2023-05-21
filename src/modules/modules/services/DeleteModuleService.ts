import { IModuleRepository } from '../repositories/interfaces/IModuleRepository'
import AppError from '../../../shared/errors/AppError'

export class DeleteModuleService {
  constructor(private readonly moduleRepository: IModuleRepository) {}

  public async execute(id: string): Promise<void> {
    const module = await this.moduleRepository.findById(id)

    if (!module) {
      throw new AppError('you only can delete an existent module')
    }

    await this.moduleRepository.delete(id)
  }
}
