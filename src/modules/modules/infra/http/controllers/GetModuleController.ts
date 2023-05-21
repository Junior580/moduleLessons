import { Request, Response } from 'express'
import { ModuleRepository } from '../../typeorm/repositories/ModuleRepository'
import { GetModuleService } from '../../../services/GetModuleService'

export class GetModuleController {
  public async handle(req: Request, res: Response) {
    const moduleRepo = new ModuleRepository()

    const getModule = new GetModuleService(moduleRepo)

    const modules = await getModule.execute()

    return res.status(200).json(modules)
  }
}
