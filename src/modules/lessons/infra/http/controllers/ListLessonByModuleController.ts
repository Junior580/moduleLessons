import { Request, Response } from 'express'

import { LessonRepository } from '../../typeorm/repositories/LessonRepository'
import { ListLessonByModuleService } from '../../../services/ListLessonByModule'

export class ListLessonByModuleController {
  public async handle(req: Request, res: Response) {
    const { id } = req.params
    const lessonRepo = new LessonRepository()

    const listLessons = new ListLessonByModuleService(lessonRepo)

    const lessons = await listLessons.execute(id)

    return res.status(200).json(lessons)
  }
}
