import { UserService } from './user-service';
import { UserRepository } from './user-repository';

describe('UserService', () => {
  it('should be defined', () => {
    expect(new UserService(new UserRepository())).toBeDefined();
  });
});
