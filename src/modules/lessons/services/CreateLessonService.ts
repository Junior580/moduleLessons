import { parseISO } from 'date-fns'
import { Lesson } from '../infra/typeorm/entities/Lesson'
import AppError from '../../../shared/errors/AppError'
import { ILessonRepository } from '../repositories/interfaces/ILessonRepository'
import { IModuleRepository } from '../../modules/repositories/interfaces/IModuleRepository'

interface ILessonRequest {
  name: string
  module: string
  date: string
  userID: string
}

type IResponse = Lesson

export class CreateLessonService {
  constructor(
    private readonly lessonRepository: ILessonRepository,
    private readonly moduleRepository: IModuleRepository
  ) {}
  public async execute({
    name,
    module,
    date,
    userID,
  }: ILessonRequest): Promise<IResponse> {
    const formatDate = parseISO(date)

    const moduleExists = await this.moduleRepository.findById(module)

    if (!moduleExists) {
      throw new AppError('you only can create a lesson with in a valid module')
    }

    const lessonByDateAndModule =
      await this.lessonRepository.findByDateAndModule({
        date: formatDate,
        moduleID: module,
      })

    if (lessonByDateAndModule) {
      throw new AppError(
        'you cannot create a lesson in the same hour and module'
      )
    }

    const lessonExists = await this.lessonRepository.findById(name)

    if (lessonExists) {
      throw new AppError('Lessons already exists', 500)
    }

    const lesson = await this.lessonRepository.createLesson({
      name,
      moduleID: module,
      date: formatDate,
      userID,
    })

    return lesson
  }
}
