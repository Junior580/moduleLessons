import { Request, Response } from 'express'

import { GetLessonService } from '../../../services/GetLessonService'
import { LessonRepository } from '../../typeorm/repositories/LessonRepository'

export class GetLessonController {
  public async handle(req: Request, res: Response) {
    const lessonRepo = new LessonRepository()

    const getLessons = new GetLessonService(lessonRepo)

    const lessons = await getLessons.execute()

    return res.status(200).json(lessons)
  }
}
