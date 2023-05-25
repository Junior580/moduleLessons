import { Lesson } from '../infra/typeorm/entities/Lesson'
import { ILessonRepository } from '../repositories/interfaces/ILessonRepository'
import AppError from '../../../shared/errors/AppError'

export class ListLessonByModuleService {
  constructor(private readonly lessonRepository: ILessonRepository) {}
  public async execute(id: string): Promise<Lesson[] | null> {
    const lessons = await this.lessonRepository.findByModuleId(id)

    if (!lessons) {
      throw new AppError('Nothing lesson in this module')
    }

    return lessons
  }
}
