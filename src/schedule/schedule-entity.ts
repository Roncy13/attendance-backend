import { UpdateEntity } from "../utilities/update-entity";
import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { User } from "../users/users-entity";
import { Course } from "../courses/courses-entity";

@Entity()
export class Schedule extends UpdateEntity {

  @Column('datetime')
  start: Date;

  @Column('datetime')
  end: Date;

  @Column('datetime', { nullable: true })
  assesment: Date;

  @ManyToOne(type => User, { nullable: false })
  @JoinColumn()
  trainer: number;

  @ManyToOne(type => Course, { nullable: false })
  @JoinColumn()
  course: number;
}
