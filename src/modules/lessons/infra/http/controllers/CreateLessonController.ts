import { Request, Response } from 'express'
import { CreateLessonService } from '../../../services/CreateLessonService'
import { LessonRepository } from '../../typeorm/repositories/LessonRepository'
import { ModuleRepository } from '../../../../modules/infra/typeorm/repositories/ModuleRepository'

export class CreateLessonController {
  public async handle(req: Request, res: Response) {
    const user_id = req.user.id

    const { name, module, date } = req.body

    const lessonRepo = new LessonRepository()

    const moduleRepo = new ModuleRepository()

    const createLesson = new CreateLessonService(lessonRepo, moduleRepo)

    const lesson = await createLesson.execute({
      name,
      module,
      date,
      userID: user_id,
    })

    return res.status(201).json(lesson)
  }
}
