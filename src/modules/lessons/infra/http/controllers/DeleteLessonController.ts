import { Request, Response } from 'express'
import { DeleteLessonService } from '../../../services/DeleteLessonService'
import { LessonRepository } from '../../typeorm/repositories/LessonRepository'

export class DeleteLessonController {
  public async handle(req: Request, res: Response) {
    const { id } = req.params

    const lessonRepo = new LessonRepository()

    const deleteLessons = new DeleteLessonService(lessonRepo)

    const lesson = await deleteLessons.execute(id)

    return res.status(200).json({ deleted: 'user has been deleted', lesson })
  }
}
