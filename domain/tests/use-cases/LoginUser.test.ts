

import { describe, it, expect } from 'vitest';
import { LoginUser, UserRepository, PasswordService } from '../../../domain/src/use-cases/LoginUser';
import { User } from '../../../domain/src/entities/User';

describe('LoginUser Use Case', () => {
  it('should login user if credentials are valid', () => {
    const existingUser = new User({
      id: 1,
      name: 'Mechy',
      email: 'mechy@example.com',
      password: 'plaintext123', 
      role: 'admin',
    });

    const fakeRepo: UserRepository = {
      findByEmail: (email: string) =>
        email === 'mechy@example.com' ? existingUser : undefined,
    };

    const fakePasswordService: PasswordService = {
      compare: (plain: string, hashed: string) => plain === hashed,
    };

    const loginUser = new LoginUser(fakeRepo, fakePasswordService);

    const user = loginUser.execute('mechy@example.com', 'plaintext123');

    expect(user).toBeInstanceOf(User);
    expect(user.email).toBe('mechy@example.com');
  });

  it('should throw error if user is not found', () => {
    const fakeRepo: UserRepository = {
      findByEmail: () => undefined,
    };

    const fakePasswordService: PasswordService = {
      compare: () => true,
    };

    const loginUser = new LoginUser(fakeRepo, fakePasswordService);

    expect(() => {
      loginUser.execute('unknown@example.com', 'any');
    }).toThrowError('Invalid credentials');
  });

  it('should throw error if password is incorrect', () => {
    const existingUser = new User({
      id: 2,
      name: 'Someone',
      email: 'someone@example.com',
      password: 'correctpass',
      role: 'user',
    });

    const fakeRepo: UserRepository = {
      findByEmail: () => existingUser,
    };

    const fakePasswordService: PasswordService = {
      compare: () => false,
    };

    const loginUser = new LoginUser(fakeRepo, fakePasswordService);

    expect(() => {
      loginUser.execute('someone@example.com', 'wrongpass');
    }).toThrowError('Invalid credentials');
  });
});
