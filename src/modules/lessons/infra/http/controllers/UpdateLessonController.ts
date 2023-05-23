import { Request, Response } from 'express'

import { LessonRepository } from '../../typeorm/repositories/LessonRepository'
import { UpdateLessonService } from '../../../services/UpdateLessonService'
import { ModuleRepository } from '../../../../modules/infra/typeorm/repositories/ModuleRepository'

export class UpdateLessonController {
  public async handle(req: Request, res: Response) {
    const { id } = req.params
    const { name, date, module } = req.body

    const lessonRepo = new LessonRepository()

    const moduleRepo = new ModuleRepository()

    const updateLesson = new UpdateLessonService(lessonRepo, moduleRepo)

    const lessons = await updateLesson.execute({
      id,
      date,
      name,
      moduleID: module,
    })

    return res.status(200).json(lessons)
  }
}
