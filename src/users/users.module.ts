import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user-repository';
import { UserService } from './user-service';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository]), JwtModule.register({ secret: process.env.SECRET_KEY })],
  controllers: [UsersController],
  providers: [UserService]
})
export class UsersModule {}
