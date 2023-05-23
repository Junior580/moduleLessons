import { Repository } from 'typeorm'
import { AppDataSource } from '../../../../../shared/infra/typeorm/data-source'
import { ICreateLessonDTO } from '../../../dtos/ICreateLessonDTO'
import { IFindLessonByDateAndModuleDTO } from '../../../dtos/IFindLessonByDateAndModuleDTO'
import { ILessonRepository } from '../../../repositories/interfaces/ILessonRepository'
import { Lesson } from '../entities/Lesson'

export class LessonRepository implements ILessonRepository {
  private lessonRepository: Repository<Lesson>
  constructor() {
    this.lessonRepository = AppDataSource.getRepository(Lesson)
  }

  public async findAll(): Promise<Lesson[]> {
    const lesson = await this.lessonRepository.find()

    return lesson
  }

  public async findByDateAndModule({
    date,
    moduleID,
  }: IFindLessonByDateAndModuleDTO): Promise<Lesson | null> {
    const lesson = await this.lessonRepository.findOne({
      where: {
        date: date,
        moduleID: moduleID,
      },
    })

    return lesson
  }

  public async findLessonByName(name: string): Promise<Lesson | null> {
    const lesson = await this.lessonRepository.findOneBy({ name })

    return lesson
  }

  public async createLesson({
    name,
    moduleID,
    date,
    userID,
  }: ICreateLessonDTO): Promise<Lesson> {
    const lesson = this.lessonRepository.create({
      name,
      moduleID,
      date,
      userID,
    })

    await this.lessonRepository.save(lesson)

    return lesson
  }

  public async findById(id: string): Promise<Lesson | null> {
    const lesson = await this.lessonRepository.findOneBy({ id })

    return lesson
  }

  public async save(lesson: Lesson): Promise<void> {
    await this.lessonRepository.save(lesson)
  }

  public async delete(id: string): Promise<void> {
    await this.lessonRepository.delete(id)
  }
}
