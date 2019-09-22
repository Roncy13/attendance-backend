import { GenericEntity } from "./generic-entity";
import { ManyToOne, JoinColumn } from "typeorm";
import { User } from "../users/users-entity";

export class UpdateEntity extends GenericEntity {

  @ManyToOne(type => User, { nullable: false })
  @JoinColumn()
  updatedBy: number;
}