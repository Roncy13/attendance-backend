import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CourseService } from './course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseRepository } from './course.repository';
import { UserRepository } from '../users/user-repository';

@Module({
  imports: [TypeOrmModule.forFeature([CourseRepository, UserRepository])],
  controllers: [CoursesController],
  providers: [CourseService]
})
export class CoursesModule {}
