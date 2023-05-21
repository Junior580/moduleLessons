import { Router, Request, Response } from 'express'
import { ensureAuthenticated } from '../../../../../shared/infra/http/middlewares/ensureAuthenticated'
import { GetModuleService } from '../../../services/GetModuleService'
import { DeleteModuleService } from '../../../services/DeleteModuleService'
import { CreateModuleController } from '../controllers/CreateModuleController'
import { GetModuleController } from '../controllers/GetModuleController'
import { DeleteModuleController } from '../controllers/DeleteModuleController'

export const moduleRoutes = Router()

const createModule = new CreateModuleController()
const getModule = new GetModuleController()

const deleteModule = new DeleteModuleController()

moduleRoutes.post('/', ensureAuthenticated, createModule.handle)
moduleRoutes.get('/', ensureAuthenticated, getModule.handle)

moduleRoutes.delete('/:id', ensureAuthenticated, deleteModule.handle)
