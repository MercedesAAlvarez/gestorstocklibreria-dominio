import { User } from '../../entities/User';

export interface UserRepository {
  findByEmail(email: string): User | undefined;
  findById?(id: number): User | undefined;
  save?(user: User): void;
  delete?(id: number): void;
}