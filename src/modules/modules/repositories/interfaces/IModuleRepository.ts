import { ICreateModuleDTO } from '../../dtos/ICreateModuleDTO'
import { Module } from '../../infra/typeorm/entities/Module'

export interface IModuleRepository {
  findAll(): Promise<Module[]>
  findByName(name: string): Promise<Module | null>
  createModule({ name, userID }: ICreateModuleDTO): Promise<Module>
  findById(id: string): Promise<Module | null>
  save({ name, userID }: ICreateModuleDTO): Promise<void>
  delete(id: string): Promise<void>
}
