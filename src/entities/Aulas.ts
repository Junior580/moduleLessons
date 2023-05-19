import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity('aulas')
export class Aulas {
  @PrimaryColumn({ primary: true })
  id: string

  @Column()
  name: string

  @Column('timestamp with time zone')
  date: Date

  @ManyToOne(() => Modulos, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User(() => User, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
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
