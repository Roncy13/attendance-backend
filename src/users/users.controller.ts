import { Controller, Post, Body, Res, HttpStatus, InternalServerErrorException, UseGuards, Get, Put, Param } from '@nestjs/common';
import { UserDTO } from './user-dto';
import { Response } from 'express';
import { UserService } from './user-service';
import { ResponseFormat } from '../utilities/libraries';
import { LoginDTO } from './login-dto';
import { AuthGuard } from '../auth-guard';
import { UserDecorator } from './user.decorator';

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
      const msg = 'Student Has been Registered Successfully';

      return ResponseFormat(resp, msg, data, HttpStatus.CREATED);
    } catch(err) {
      throw new InternalServerErrorException(err);
    }
  }

  @Put()
  @UseGuards(AuthGuard)
  async update(
    @Body() dto: UserDTO,
    @Res() resp: Response,
    @UserDecorator() user
  ) {
    try {
      const data = await this.userService.updateNoTrail(dto, user.id, user.id);
      const msg = 'Student Has been Updated Successfully';
      delete data['salt'];

      return ResponseFormat(resp, msg, data, HttpStatus.OK);
    } catch(err) {
      throw new InternalServerErrorException(err);
    }
  }

  @Post('/login')
  async login(@Body() dto: LoginDTO, @Res() resp: Response) {

    try {
      const data = await this.userService.login(dto);
      const msg = 'Login Credentials Successfully';

      return ResponseFormat(resp, msg, data, HttpStatus.CREATED)

    } catch(err) {

      const { statusCode } = err.response;
      
      if (statusCode === HttpStatus.NOT_FOUND) {
        const msg = 'Login Credentials Failed';

        return ResponseFormat(resp, msg, dto, HttpStatus.NOT_FOUND )
      }

      throw new InternalServerErrorException(err);
    }
  }

  @Get('/info')
  @UseGuards(AuthGuard)
  async info(@UserDecorator() user) {
    console.log(user)
  }
}
