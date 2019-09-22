import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { UserTypes } from './user-types';
import { GenericEntity } from '../utilities/generic-entity';

@Entity()
export class User extends GenericEntity {

  @Column({ length: 100})
  firstName: string;

  @Column({ length: 100})
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
}
