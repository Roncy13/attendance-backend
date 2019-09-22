import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleDatesController } from './schedule-dates.controller';

describe('ScheduleDates Controller', () => {
  let controller: ScheduleDatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScheduleDatesController],
    }).compile();

    controller = module.get<ScheduleDatesController>(ScheduleDatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
