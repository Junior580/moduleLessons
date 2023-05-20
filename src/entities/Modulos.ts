import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'

import { v4 as uuid } from 'uuid'

import { Aulas } from './Aulas'

@Entity('modulos')
export class Modulos {
  @PrimaryColumn({ primary: true })
  id: string

  @Column()
  name: string

  @OneToMany(() => Aulas, aula => aula.modulos)
  aulas: Aulas[]

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid().toUpperCase()
    }
  }
}
