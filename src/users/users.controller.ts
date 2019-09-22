import { Controller, Post, Body, Res, HttpStatus, InternalServerErrorException } from '@nestjs/common';
import { UserDTO } from './user-dto';
import { Response } from 'express';
import { UserService } from './user-service';
import { ResponseFormat } from '../utilities/libraries';

@Controller('user')
export class UsersController {

  constructor(private userService: UserService) {}

  @Post()
  async create(
    @Body() dto: UserDTO,
    @Res() resp: Response
  ) {
    try {

      const data = await this.userService.create(dto);
      const msg = 'User Has been Registered Successfully';

      return ResponseFormat(resp, msg, data, HttpStatus.CREATED);
    } catch(err) {
      throw new InternalServerErrorException(err);
    }
  }
}
