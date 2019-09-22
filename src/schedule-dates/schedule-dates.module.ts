import { Module } from '@nestjs/common';
import { ScheduleDatesController } from './schedule-dates.controller';

@Module({
  controllers: [ScheduleDatesController]
})
export class ScheduleDatesModule {}
