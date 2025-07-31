

import { User } from '../entities/User';

export interface UserRepository {
  findByEmail(email: string): User | undefined;
}

export class FindUserByEmail {
  constructor(private readonly userRepository: UserRepository) {}

  execute(email: string): User {
    const user = this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
