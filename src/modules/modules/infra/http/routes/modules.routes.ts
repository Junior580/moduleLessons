import { Router } from 'express'
import { ensureAuthenticated } from '../../../../../shared/infra/http/middlewares/ensureAuthenticated'
import { CreateModuleController } from '../controllers/CreateModuleController'
import { GetModuleController } from '../controllers/GetModuleController'
import { DeleteModuleController } from '../controllers/DeleteModuleController'
import { UpdateModuleController } from '../controllers/UpdateModuleController'

export const moduleRoutes = Router()

const createModule = new CreateModuleController()
const getModule = new GetModuleController()
const updateModule = new UpdateModuleController()
const deleteModule = new DeleteModuleController()

moduleRoutes.post('/', ensureAuthenticated, createModule.handle)
moduleRoutes.get('/', getModule.handle)
moduleRoutes.put('/:id', ensureAuthenticated, updateModule.handle)
moduleRoutes.delete('/:id', ensureAuthenticated, deleteModule.handle)
