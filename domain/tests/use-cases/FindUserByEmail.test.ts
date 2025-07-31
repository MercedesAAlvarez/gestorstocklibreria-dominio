

import { describe, it, expect } from 'vitest';
import { FindUserByEmail, UserRepository } from '../../../domain/src/use-cases/FindUserByEmail';
import { User } from '../../../domain/src/entities/User';

describe('FindUserByEmail Use Case', () => {
  it('should return user if email exists', () => {
    const existingUser = new User({
      id: 1,
      name: 'Mechy',
      email: 'mechy@example.com',
      password: 'secret',
      role: 'admin',
    });

    const fakeRepo: UserRepository = {
      findByEmail: (email: string) =>
        email === 'mechy@example.com' ? existingUser : undefined,
    };

    const findUserByEmail = new FindUserByEmail(fakeRepo);

    const user = findUserByEmail.execute('mechy@example.com');

    expect(user).toBeInstanceOf(User);
    expect(user.email).toBe('mechy@example.com');
  });

  it('should throw error if email does not exist', () => {
    const fakeRepo: UserRepository = {
      findByEmail: () => undefined,
    };

    const findUserByEmail = new FindUserByEmail(fakeRepo);

    expect(() => {
      findUserByEmail.execute('unknown@example.com');
    }).toThrowError('User not found');
  });
});
