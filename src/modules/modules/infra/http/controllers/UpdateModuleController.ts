import { Request, Response } from 'express'
import { ModuleRepository } from '../../typeorm/repositories/ModuleRepository'
import { UpdateModuleService } from '../../../services/UpdateModuleService'
export class UpdateModuleController {
  public async handle(req: Request, res: Response) {
    const { id } = req.params
    const { name } = req.body

    const moduleRepo = new ModuleRepository()

    const updateModule = new UpdateModuleService(moduleRepo)

    const module = await updateModule.execute({ id, name })

    return res.status(201).json(module)
  }
}
