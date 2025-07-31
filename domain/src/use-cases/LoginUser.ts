
import { User } from '../entities/User';

export interface UserRepository {
  findByEmail(email: string): User | undefined;
}

export interface PasswordService {
  compare(plain: string, hashed: string): boolean;
}

export class LoginUser {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordService: PasswordService
  ) {}

  execute(email: string, password: string): User {
    const user = this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const passwordMatches = this.passwordService.compare(password, user.password);

    if (!passwordMatches) {
      throw new Error('Invalid credentials');
    }

    return user;
  }
}
