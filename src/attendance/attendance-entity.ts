import { UpdateEntity } from "../utilities/update-entity";
import { JoinColumn, ManyToOne, Entity, Column } from "typeorm";
import { Enrollment } from "../enrollment/enrollment-entity";
import { User } from "../users/users-entity";
import { ScheduleDate } from "../schedule-dates/schedule-dates-entity";

@Entity()
export class Attendance extends UpdateEntity {
  @ManyToOne(type => ScheduleDate, { nullable: false })
  @JoinColumn()
  schedule: number;

  @ManyToOne(type => Enrollment, { nullable: false })
  @JoinColumn()
  enrollment: number;
}
