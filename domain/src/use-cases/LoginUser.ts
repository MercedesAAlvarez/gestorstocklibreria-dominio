
import { User } from '../entities/User';
import { UserRepository } from "../repositories/interfaces/UserRepository";
import { PasswordService } from "../services/password-service";

interface LoginUserInput {
  email: string;
  password:string;
}



//export interface UserRepository {
 // findByEmail(email: string): User | undefined;
//}

//export interface PasswordService {
  //compare(plain: string, hashed: string): boolean;
//}

export class LoginUser {
  constructor(
    private readonly repository: UserRepository,
    private readonly passwordService: PasswordService
  ) {}

   async execute({email, password}: LoginUserInput) {
    const user = await this.repository.findByEmail(email);

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isValid = await this.passwordService.compare(password, user.password);

    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    return user;
  }
}
