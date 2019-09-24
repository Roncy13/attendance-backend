import { Response } from 'express';
import { GenericController } from './generic-controller';
import {
  Put,
  InternalServerErrorException,
  Param,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../../auth-guard';
@UseGuards(AuthGuard)
export abstract class MaintenanceController extends GenericController {
  constructor(public service: any) {
    super(service);
  }
  abstract async create(dto: any, res: Response): Promise<Response>;
  abstract async update(
    updateJobDTO: any,
    res: Response,
    id: number,
  ): Promise<Response>;
  @Put(':id/active')
  async active(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<Response> {
    const { email } = res.locals;

    try {
      const data = await this.service.active(id, email);

      return this.response(res, {
        message: 'Record Activated Successfully',
        data,
      });
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
  @Put(':id/inactive')
  async inactive(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<Response> {
    const { email } = res.locals;

    try {
      const data = await this.service.inactive(id, email);

      return this.response(res, {
        message: 'Record Inactivated Successfully',
        data,
      });
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
