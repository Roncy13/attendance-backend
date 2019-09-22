import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';
import { UserTypes } from './user-types';
import { GenericEntity } from '../utilities/generic-entity';

@Unique(['email'])
@Entity()
export class User extends GenericEntity {

  @Column({ length: 100})
  firstName: string;

  @Column({ length: 100, nullable: true })
  middleName: string;

  @Column({ length: 100})
  lastName: string;

  @Column({ type: 'datetime' })
  birthday: Date;

  @Column({ length: 100})
  occupation: string;

  @Column({ length: 100})
  address: string;

  @Column({ type: 'int' })
  userType: UserTypes;

  @Column({ length: 100 })
  password: string;

  @Column({ length: 100 })
  salt: string;

  @Column({ length: 100 })
  email: string;
}
