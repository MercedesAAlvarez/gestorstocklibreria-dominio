

import { User } from '../../entities/User';
import { UserRepository } from '../../repositories/interfaces/UserRepository';

export class MockUserRepository implements UserRepository {
  private users: User[] = [];

  findByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }

  findById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  save(user: User): void {
    this.users.push(user);
  }

  delete(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
