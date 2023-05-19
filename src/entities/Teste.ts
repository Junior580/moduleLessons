import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Photo {
  @PrimaryColumn({ primary: true })
  id: number

  @Column()
  name: string
  @Column()
  description: string

  @Column()
  filename: string

  @Column()
  views: number

  @Column()
  isPublished: boolean
}
