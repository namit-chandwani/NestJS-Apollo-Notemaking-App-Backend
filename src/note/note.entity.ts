import { Entity, Column, PrimaryColumn, ObjectIdColumn } from 'typeorm';

@Entity()
export class Note {
  @ObjectIdColumn()
  @PrimaryColumn()
  _id: string;

  @Column()
  title: string;

  @Column()
  description: string;
}
