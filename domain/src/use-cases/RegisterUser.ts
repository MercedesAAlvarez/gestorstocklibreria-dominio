

import { User } from '../entities/User';

export interface UserRepository {
  findByEmail(email: string): User | undefined;
  save(user: User): void;
}

export class RegisterUser {
  constructor(private readonly userRepository: UserRepository) {}

  execute(userData: {
    id: number;
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'user';
  }): User {
    const existingUser = this.userRepository.findByEmail(userData.email);

    if (existingUser) {
      throw new Error(`User with email ${userData.email} already exists`);
    }

    const user = new User(userData);

    this.userRepository.save(user);

    return user;
  }
}
