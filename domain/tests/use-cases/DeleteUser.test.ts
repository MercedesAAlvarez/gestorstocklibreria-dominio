

import { describe, it, expect, vi } from 'vitest';
import { DeleteUser, UserRepository } from '../../../domain/src/use-cases/DeleteUser';
import { User } from '../../../domain/src/entities/User';

describe('DeleteUser Use Case', () => {
  it('should delete user if user exists', () => {
    const existingUser = new User({
      id: 1,
      name: 'Mechy',
      email: 'mechy@example.com',
      password: 'secret',
      role: 'admin',
    });

    const deleteMock = vi.fn();

    const fakeRepo: UserRepository = {
      findById: (id: number) => (id === 1 ? existingUser : undefined),
      delete: deleteMock,
    };

    const deleteUser = new DeleteUser(fakeRepo);

    deleteUser.execute(1);

    expect(deleteMock).toHaveBeenCalledWith(1);
  });

  it('should throw error if user does not exist', () => {
    const fakeRepo: UserRepository = {
      findById: () => undefined,
      delete: vi.fn(),
    };

    const deleteUser = new DeleteUser(fakeRepo);

    expect(() => {
      deleteUser.execute(999);
    }).toThrowError('User not found');
  });
});
