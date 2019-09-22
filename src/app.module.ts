import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { ScheduleModule } from './schedule/schedule.module';
import { AttendanceModule } from './attendance/attendance.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { ScheduleDatesModule } from './schedule-dates/schedule-dates.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, CoursesModule, ScheduleModule, AttendanceModule, EnrollmentModule, ScheduleDatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
