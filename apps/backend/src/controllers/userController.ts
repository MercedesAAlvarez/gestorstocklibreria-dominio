

import { RegisterUser } from "@domain/use-cases/RegisterUser";
import { MockUserRepository } from "@domain/repositories/mocks/MockUserRepository";
import { UserAdapter } from "../adapters/userAdapter";
import { FindUserByEmail } from "@domain/use-cases/FindUserByEmail";
import { LoginUser } from "@domain/use-cases/LoginUser";
import { PasswordService } from "@domain/services/password-service";

const repository = new MockUserRepository();

const createUser = new RegisterUser(repository);
const findUserByEmail = new FindUserByEmail(repository);
const passwordService = new PasswordService();
const loginUser = new LoginUser(repository, passwordService);

export const userController = new UserAdapter(
    createUser, 
    findUserByEmail,
    loginUser
);
