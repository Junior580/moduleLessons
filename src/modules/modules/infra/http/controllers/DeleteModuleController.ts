import { Request, Response } from 'express'
import { DeleteModuleService } from '../../../services/DeleteModuleService'
import { ModuleRepository } from '../../typeorm/repositories/ModuleRepository'

export class DeleteModuleController {
  public async handle(req: Request, res: Response) {
    const { id } = req.params

    const moduleRepo = new ModuleRepository()

    const repoModule = new DeleteModuleService(moduleRepo)

    const module = await repoModule.execute(id)

    return res.status(200).json({ deleted: 'user has been deleted', module })
  }
}
