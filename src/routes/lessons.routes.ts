import { Router, Request, Response } from 'express'
import { CreateModuleService } from '../services/CreateModuleService'
import { CreateLessonService } from '../services/CreateLessonService'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

export const lessonRoutes = Router()

lessonRoutes.post(
  '/',
  ensureAuthenticated,
  async (req: Request, res: Response) => {
    const user_id = req.user.id

    const { name, module, date } = req.body

    const createLesson = new CreateLessonService()

    const lesson = await createLesson.execute({
      name,
      module,
      date,
      userID: user_id,
    })

    return res.json(lesson)
  }
)
