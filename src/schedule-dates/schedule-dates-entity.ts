import { UpdateEntity } from "../utilities/update-entity";
import { Column, ManyToOne, JoinColumn, Entity } from "typeorm";
import { Schedule } from "../schedule/schedule-entity";

@Entity()
export class ScheduleDate extends UpdateEntity {

  @Column('datetime', { nullable: false })
  dates: Date;

  @ManyToOne(type => Schedule, { nullable: false })
  @JoinColumn()
  schedule: number;
}
