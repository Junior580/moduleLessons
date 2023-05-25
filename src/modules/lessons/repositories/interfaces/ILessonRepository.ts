import { ICreateLessonDTO } from '../../dtos/ICreateLessonDTO'
import { IFindLessonByDateAndModuleDTO } from '../../dtos/IFindLessonByDateAndModuleDTO'
import { Lesson } from '../../infra/typeorm/entities/Lesson'

export interface ILessonRepository {
  findAll(): Promise<Lesson[]>
  findByDateAndModule({
    date,
    moduleID,
  }: IFindLessonByDateAndModuleDTO): Promise<Lesson | null>
  findLessonByName(name: string): Promise<Lesson | null>
  createLesson({ name, userID }: ICreateLessonDTO): Promise<Lesson>
  findByModuleId(id: string): Promise<Lesson[] | null>
  findById(id: string): Promise<Lesson | null>
  save(lesson: Lesson): Promise<void>
  delete(id: string): Promise<void>
}
