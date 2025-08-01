

import type { Request, Response } from "express";
import { RegisterUser } from "@domain/use-cases/RegisterUser";
import {FindUserByEmail} from '@domain/use-cases/FindUserByEmail';
import {LoginUser} from '@domain/use-cases/LoginUser'

export class UserAdapter {
  constructor(
    private readonly createUser: RegisterUser,
    private readonly findUserByEmail: FindUserByEmail,
    private readonly loginUser: LoginUser
  ) {}

  async handleCreate(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password, role } = req.body;

      const user = this.createUser.execute({
        name,
        email,
        password,
        role,
        id: 0
      });
      return res.status(201).json(user);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async handleFindByEmail(req: Request, res: Response): Promise<Response> {
  try {
    const { email } = req.params;

    if (!email) {
      return res.status(400).json({ error: 'Email is required in params' });
    }

    const user = this.findUserByEmail.execute(email);
    return res.status(200).json(user);
  } catch (error: any) {
    return res.status(404).json({ error: error.message });
   }
  }

   async handleLogin(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;
      const user = await this.loginUser.execute({ email, password });
      return res.status(200).json(user);
    } catch (error: any) {
      return res.status(401).json({ error: error.message });
    }
  }
}
 

