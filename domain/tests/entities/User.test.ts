
import { describe, it, expect } from 'vitest';
import { User } from '../../../domain/src/entities/User';

describe('User Entity', () => {
  it('should create a user with the correct properties', () => {
    const user = new User({
      id: 1,
      name: 'Mechy Alvarez',
      email: 'mechy@example.com',
      password: 'securePassword123',
      role: 'admin',
    });

    expect(user.id).toBe(1);
    expect(user.name).toBe('Mechy Alvarez');
    expect(user.email).toBe('mechy@example.com');
    expect(user.password).toBe('securePassword123');
    expect(user.role).toBe('admin');
  });
});
