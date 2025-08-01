

import { User } from '../entities/User';

export interface UserRepository {
  findById(id: number): User | undefined;
  delete(id: number): void;
}

export class DeleteUser {
  constructor(private readonly userRepository: UserRepository) {}

  execute(id: number): void {
    const user = this.userRepository.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    this.userRepository.delete(id);
  }
}
