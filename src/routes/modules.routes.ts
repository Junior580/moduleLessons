import { Router, Request, Response } from 'express'
import { CreateModuleService } from '../services/CreateModuleService'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

export const moduleRoutes = Router()

moduleRoutes.post(
  '/',
  ensureAuthenticated,
  async (req: Request, res: Response) => {
    const user_id = req.user.id

    const { name } = req.body

    const createModule = new CreateModuleService()

    const module = await createModule.execute({ name, userID: user_id })

    return res.status(201).json(module)
  }
)
