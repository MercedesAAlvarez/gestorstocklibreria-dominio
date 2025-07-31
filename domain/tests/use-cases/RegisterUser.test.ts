

import { describe, it, expect } from 'vitest';
import { RegisterUser, UserRepository } from '../../../domain/src/use-cases/RegisterUser';
import { User } from '../../../domain/src/entities/User';

describe('RegisterUser Use Case', () => {
  it('should register a new user if email is not taken', () => {
    
    const fakeUsers: User[] = [];

    const fakeRepo: UserRepository = {
      findByEmail: (email: string) => fakeUsers.find(user => user.email === email),
      save: (user: User) => fakeUsers.push(user),
    };

    const registerUser = new RegisterUser(fakeRepo);

    const user = registerUser.execute({
      id: 1,
      name: 'Mechy',
      email: 'mechy@example.com',
      password: 'secret',
      role: 'admin',
    });

    expect(user).toBeInstanceOf(User);
    expect(user.email).toBe('mechy@example.com');
    expect(fakeUsers).toHaveLength(1);
  });

  it('should throw error if email is already registered', () => {
    const existingUser = new User({
      id: 1,
      name: 'Existing',
      email: 'taken@example.com',
      password: '123',
      role: 'user',
    });

    const fakeUsers = [existingUser];

    const fakeRepo: UserRepository = {
      findByEmail: (email: string) => fakeUsers.find(user => user.email === email),
      save: (user: User) => fakeUsers.push(user),
    };

    const registerUser = new RegisterUser(fakeRepo);

    expect(() => {
      registerUser.execute({
        id: 2,
        name: 'Another',
        email: 'taken@example.com',
        password: '456',
        role: 'admin',
      });
    }).toThrowError('User with email taken@example.com already exists');
  });
});
