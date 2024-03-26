// src/repositories/UserRepository.ts
import { Repository } from 'typeorm';
import { AppDataSource } from '../DataSource';
import { UserEntity } from '../entities/User';
import { IUser } from '../intefaces/IUser';
import { IUserRepository } from '../intefaces/IUserRepository';



export class UserRepository implements IUserRepository {
  private userRepository: Repository<UserEntity>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(UserEntity);
  }
  // constructor(private readonly userRepository: Repository<UserEntity>) {}

  async findAll(): Promise<IUser[]> {
    const findAllUsers =   await this.userRepository.find()
    return findAllUsers.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email
    }));  
  }

  async createUser(user: IUser): Promise<IUser> {
    const newUser = this.userRepository.create(user);
    await this.userRepository.save(newUser);
    return newUser;
  }
}
