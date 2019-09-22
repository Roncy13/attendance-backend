import { User } from './users-entity';

describe('UsersEntity', () => {
  it('should be defined', () => {
    expect(new User()).toBeDefined();
  });
});
