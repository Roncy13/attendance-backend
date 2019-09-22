import { UpdateEntity } from "../utilities/update-entity";
import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { User } from "../users/users-entity";
import { Schedule } from "../schedule/schedule-entity";

@Entity()
export class Enrollment extends UpdateEntity {

  @ManyToOne(type => User, { nullable: false })
  @JoinColumn()
  student: number;

  @ManyToOne(type => Schedule, { nullable: false })
  @JoinColumn()
  schedule: number;
}
