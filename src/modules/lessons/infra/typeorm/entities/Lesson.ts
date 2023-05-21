import {
  Entity,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'

import { v4 as uuid } from 'uuid'
import { Module } from '../../../../modules/infra/typeorm/entities/Module'
import { User } from '../../../../users/infra/typeorm/entities/User'

@Entity('Lessons')
export class Lesson {
  @PrimaryColumn({ primary: true })
  id: string

  @Column()
  name: string

  @Column('timestamp with time zone')
  date: Date

  @Column()
  moduleID: string

  @ManyToOne(() => Module, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'moduleID' })
  module: Module

  @Column()
  userID: string

  @ManyToOne(() => User, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'userID' })
  user: User

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
