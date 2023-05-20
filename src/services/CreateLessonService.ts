import { parseISO } from 'date-fns'
import { AppDataSource } from '../database/data-source'
import { Lesson } from '../entities/Lesson'
import AppError from '../errors/AppError'
import { Module } from 'module'

const repository = AppDataSource.getRepository(Lesson)
const moduleRepository = AppDataSource.getRepository(Module)

interface ILessonRequest {
  name: string
  module: string
  date: string
  userID: string
}

type IResponse = Lesson

export class CreateLessonService {
  public async execute({
    name,
    module,
    date,
    userID,
  }: ILessonRequest): Promise<IResponse> {
    const formatDate = parseISO(date)

    // const moduleExists = await moduleRepository.findOneBy({ id: module })
    // console.log(moduleExists)
    // if (!moduleExists) {
    //   throw new AppError('You only can create a lesson in a class', 500)
    // }

    const lessonExists = await repository.findOneBy({ name })

    if (lessonExists) {
      throw new AppError('Lessons already exists', 500)
    }

    const lesson = repository.create({
      name,
      moduleID: module,
      date: formatDate,
      userID,
    })

    await repository.save(lesson)

    return lesson
  }
}
