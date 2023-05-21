import { Request, Response } from 'express'
import { CreateModuleService } from '../../../services/CreateModuleService'
import { ModuleRepository } from '../../typeorm/repositories/ModuleRepository'

export class CreateModuleController {
  public async handle(req: Request, res: Response) {
    const user_id = req.user.id

    const { name } = req.body

    const moduleRepo = new ModuleRepository()

    const createModule = new CreateModuleService(moduleRepo)

    const module = await createModule.execute({ name, userID: user_id })

    return res.status(201).json(module)
  }
}
