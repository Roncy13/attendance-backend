import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, ManyToOne, JoinColumn, Entity } from "typeorm";

export class GenericEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: number;
}
