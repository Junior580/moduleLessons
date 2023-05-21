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
import { User } from '../../../../users/infra/typeorm/entities/User'

@Entity('modules')
export class Module {
  @PrimaryColumn({ primary: true })
  id: string

  @Column()
  name: string

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
