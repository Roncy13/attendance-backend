import { Injectable, NotFoundException } from "@nestjs/common";
import { UserRepository } from "./user-repository";
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from "./users-entity";
import { UserDTO } from "./user-dto";
import { LoginDTO } from "./login-dto";
import { JwtService } from "@nestjs/jwt";
import { AnimationFrameScheduler } from "rxjs/internal/scheduler/AnimationFrameScheduler";

@Injectable()
export class UserService {
  private saltRounds = 10;

  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(user: UserDTO): Promise<User> {
    user.salt = await bcrypt.genSalt(this.saltRounds);
    user.password = await this.passwordHash(user.password, user.salt); //bcrypt.hash(user.password, user.salt);

    return this.userRepository.save(user);
  }


  async passwordHash(password: string, hash: string): Promise<string> {
    return bcrypt.hash(password, hash);
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ email });
  }

  async login(loginDTO: LoginDTO) {
    const {
      email,
      password
    } = loginDTO;

    const user = await this.findByEmail(email);
    
    if (!user) {
      throw new NotFoundException();
    }

    const passwordCheck = await this.passwordHash(password, user.salt);

    if (passwordCheck !== user.password) {
      throw new NotFoundException();
    }

    delete user.password;
    delete user.salt;

    return await this.generateToken(user);
  }

  async generateToken(payload) {
    const accessToken = await this.jwtService.sign(JSON.stringify(payload));

    return {
      expires_in: 3600,
      access_token: accessToken,
      user_details: payload,
      status: 200
    };
  }

  async verify(token: string) {
    return this.jwtService.verify(token);
  }
}
