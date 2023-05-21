import { ILessonRepository } from '../repositories/interfaces/ILessonRepository'
import AppError from '../../../shared/errors/AppError'

export class DeleteLessonService {
  constructor(private readonly lessonRepository: ILessonRepository) {}

  public async execute(id: string): Promise<void> {
    const user = await this.lessonRepository.findById(id)

    if (!user) {
      throw new AppError('User does not exists!', 401)
    }

    await this.lessonRepository.delete(id)
  }
}
