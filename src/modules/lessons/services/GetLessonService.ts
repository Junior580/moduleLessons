import { Lesson } from '../infra/typeorm/entities/Lesson'
import { ILessonRepository } from '../repositories/interfaces/ILessonRepository'

export class GetLessonService {
  constructor(private readonly lessonRepository: ILessonRepository) {}
  public async execute(): Promise<Lesson[]> {
    const lessons = await this.lessonRepository.findAll()

    return lessons
  }
}
