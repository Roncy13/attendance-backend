import { Entity, Column } from "typeorm";
import { UpdateEntity } from "../utilities/update-entity";

@Entity()
export class Course extends UpdateEntity {

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100, nullable: true })
  description: string;
}