import { parseISO } from 'date-fns'
import AppError from '../../../shared/errors/AppError'
import { Lesson } from '../infra/typeorm/entities/Lesson'
import { ILessonRepository } from '../repositories/interfaces/ILessonRepository'
import { IModuleRepository } from '../../modules/repositories/interfaces/IModuleRepository'

interface ILessonRequest {
  id: string
  name?: string
  date?: string
  moduleID?: string
}

export class UpdateLessonService {
  constructor(
    private readonly lessonRepository: ILessonRepository,
    private readonly moduleRepository: IModuleRepository
  ) {}
  public async execute({
    id,
    moduleID,
    date,
    name,
  }: ILessonRequest): Promise<Lesson> {
    const lesson = await this.lessonRepository.findById(id)

    if (!lesson) {
      throw new AppError('Lesson does not exists!', 401)
    }
    if (moduleID) {
      const moduleExists = await this.moduleRepository.findById(moduleID)

      if (!moduleExists) {
        throw new AppError('You can only update a valid module')
      }
    }

    if (date && moduleID) {
      const lessonByDateAndModule =
        await this.lessonRepository.findByDateAndModule({
          date: parseISO(date),
          moduleID: moduleID,
        })

      if (lessonByDateAndModule) {
        throw new AppError(
          'you cannot update a lesson in the same hour and module'
        )
      }
    }

    lesson.name = name ? name : lesson.name

    await this.lessonRepository.save(lesson)

    return lesson
  }
}
