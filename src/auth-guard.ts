
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { UserService } from './users/user-service';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private userService: UserService) {}
  
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const {
      headers: { authorization = '' },
    } = request;

    const token = authorization.replace('Bearer ', '');
    try {
      request.user = await this.userService.verify(token);

      return true;
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}