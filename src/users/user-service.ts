import { Injectable } from "@nestjs/common";
import { UserRepository } from "./user-repository";
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from "./users-entity";
import { UserDTO } from "./user-dto";

@Injectable()
export class UserService {
  private saltRounds = 10;

  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(user: UserDTO): Promise<User> {
    user.salt = await bcrypt.genSalt(this.saltRounds);
    user.password = await bcrypt.hash(user.password, user.salt);

    return this.userRepository.save(user);
  }

  async compareHash(password: string|undefined, hash: string|undefined): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  async findByEmail(email: string) {

  }
}
