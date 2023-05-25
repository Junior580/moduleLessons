import { Router } from 'express'
import { ensureAuthenticated } from '../../../../../shared/infra/http/middlewares/ensureAuthenticated'
import { CreateLessonController } from '../controllers/CreateLessonController'
import { GetLessonController } from '../controllers/GetLessonController'
import { DeleteLessonController } from '../controllers/DeleteLessonController'
import { UpdateLessonController } from '../controllers/UpdateLessonController'
import { ListLessonByModuleController } from '../controllers/ListLessonByModuleController'

export const lessonRoutes = Router()

const createLesson = new CreateLessonController()
const getLesson = new GetLessonController()
const listLesson = new ListLessonByModuleController()
const updateLesson = new UpdateLessonController()
const deleteLesson = new DeleteLessonController()

lessonRoutes.post('/', ensureAuthenticated, createLesson.handle)
lessonRoutes.get('/', getLesson.handle)
lessonRoutes.get('/:id', listLesson.handle)

lessonRoutes.put('/:id', ensureAuthenticated, updateLesson.handle)
lessonRoutes.delete('/:id', ensureAuthenticated, deleteLesson.handle)
