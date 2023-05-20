import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'

import { v4 as uuid } from 'uuid'
import { Modulos } from './Modulos'
import { Users } from './Users'

@Entity('aulas')
export class Aulas {
  @PrimaryColumn({ primary: true })
  id: string

  @Column()
  name: string

  @Column('timestamp with time zone')
  date: Date

  @ManyToOne(() => Modulos, modulos => modulos.aulas, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  modulos: Modulos

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
