import {
  Get,
  UseGuards,
  Req,
  Query,
  Next,
  Res,
  Param,
  InternalServerErrorException,
} from '@nestjs/common';
import { PageDTO } from '../dto/page-dto';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { ResponseDTO } from '../dto/respone-dto';
import { StatusCode } from '../constants';
import { BuildPagi } from '../dto/build-pagi-dto';

interface PubService {
  findAll(): Promise<any>;
  generateWhere(query): Promise<any>;
  buildPaginate(options: BuildPagi): Promise<any>;
  findByID(id: number): Promise<any>;
}

export class GenericController {
  constructor(public pubService: PubService) {}

  @Get('list')
  async all() {
    try {
      return await this.pubService.findAll();
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException();
    }
  }

  @Get(':id')
  async getByID(
    @Res() res: Response,
    @Param('id') id: number,
  ): Promise<Response> {
    try {
      const data = await this.pubService.findByID(id);

      return this.response(res, {
        message: `Record With ID ${id} Fetch Successfully`,
        data,
      });
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  @Get()
  async index(@Query() query: PageDTO, @Res() response: Response) {
    const { page } = query;
    const limit = 10;
    // This needs to be override when you want to implement search like feature
    const where = this.pubService.generateWhere(query);
    const items = await this.pubService.buildPaginate({ page, limit, where });

    const data = {
      data: items,
      message: `Data on page ${page} Retrieved Successfully`,
    };

    return await this.response(response, data);
  }

  async response(
    response: Response,
    { statusCode = StatusCode.created, message, data },
  ): Promise<Response> {
    const body: ResponseDTO = {
      statusCode,
      message,
      data,
    };

    return response.status(statusCode).json(body);
  }

  setService(service) {
    this.pubService = service;
  }
}
