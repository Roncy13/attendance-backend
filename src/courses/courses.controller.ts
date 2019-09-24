import { Controller, Post, Put, Res, Body, Param, InternalServerErrorException, UseGuards } from '@nestjs/common';
import { MaintenanceController } from '../utilities/controllers/maintenance-controller';
import { Response } from 'express';
import { CourseService } from './course.service';
import { CourseDto } from './course.dto';
import { UserDecorator } from '../users/user.decorator';
import { AuthGuard } from '../auth-guard';

@Controller('courses')
export class CoursesController extends MaintenanceController {
  @Post()
  async create(@Body() dto: CourseDto, @Res() res: Response, @UserDecorator() user
  ): Promise<Response> {
    try {
      const data = await this.courseService.save(dto, user.id);

      return this.response(res, {
        data,
        message: 'New Course has been saved Successfully'
      })
    } catch(err) {
      throw new InternalServerErrorException();
    }
  }
  @Put(":id")
  async update(@Body() updateDto: CourseDto, @Res() res: Response, @Param() id: number, @UserDecorator() user): Promise<Response> {
    try {
      const data = await this.courseService.update(updateDto, id, user.id);

      return this.response(res, {
        data,
        message: 'New Course has been updated Successfully'
      })
    } catch(err) {
      throw new InternalServerErrorException();
    }
  }
  constructor(private courseService: CourseService) {
    super(courseService);
  }
}
