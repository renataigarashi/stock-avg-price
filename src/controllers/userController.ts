// src/controllers/UserController.ts
import { Request, Response } from 'express';
import { IUser } from '../intefaces/IUser';
import { IUserRepository } from '../intefaces/IUserRepository';
import { UserRepository } from '../repositories/userRepositoty';
import { CreateUserUseCase } from '../useCase/user/createUserUseCase';
import { GetAllUsersUseCase } from '../useCase/user/getAllUsersUseCase';


export class UserController {
  private userRepository: IUserRepository;


  async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body as IUser;

    try {
      const createUserUseCase = new CreateUserUseCase(new UserRepository());
      const user = await createUserUseCase.execute({ name, email, password });
      return res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Server Error' });
    }
  }

  async getAll(req: Request, res: Response): Promise<Response>{
    const getAllUsersUseCase = new GetAllUsersUseCase(new UserRepository())
    const result =  await getAllUsersUseCase.execute()
    console.log(result)
    return res.status(200).json(result)
  }
}